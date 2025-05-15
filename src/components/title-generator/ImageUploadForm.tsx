"use client";

import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { generateTitleText, type GenerateTitleTextInput } from '@/ai/flows/generate-title-text';
import { Loader2, Wand2, ImagePlus, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function ImageUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 4 * 1024 * 1024) { // Limit file size to 4MB
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 4MB.",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
      setSuggestions([]);
      setError(null);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file || !preview) {
      toast({
        title: "No image selected",
        description: "Please select an image file first.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuggestions([]);

    try {
      const input: GenerateTitleTextInput = { imageDataUri: preview };
      const result = await generateTitleText(input);
      if (result.titleSuggestions && result.titleSuggestions.length > 0) {
        setSuggestions(result.titleSuggestions);
        toast({
          title: "Titles Generated!",
          description: "Here are some creative suggestions for your image.",
        });
      } else {
        setError("No suggestions could be generated. Try a different image.");
      }
    } catch (err) {
      console.error("Error generating titles:", err);
      setError("Failed to generate titles. Please try again.");
      toast({
        title: "Generation Failed",
        description: (err as Error).message || "An unknown error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <Wand2 className="mr-2 h-6 w-6 text-primary" />
          AI Title Generator
        </CardTitle>
        <CardDescription>
          Upload an image and let our AI craft compelling, short titles (under 15 characters) that complement your visual.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="image-upload" className="block text-sm font-medium text-primary-foreground">Upload Image</label>
            <Input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              disabled={isLoading}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 cursor-pointer"
            />
             <p className="text-xs text-muted-foreground">Max file size: 4MB. Supported formats: JPG, PNG, WEBP.</p>
          </div>

          {preview && (
            <div className="mt-4 border border-dashed border-border rounded-lg p-4 flex flex-col items-center">
              <p className="text-sm font-medium mb-2 text-primary-foreground">Image Preview:</p>
              <Image src={preview} alt="Image preview" width={300} height={200} className="rounded-md object-contain max-h-[200px]" />
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col items-stretch">
           <Button type="submit" disabled={isLoading || !file} className="w-full group">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                Generate Titles <Wand2 className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              </>
            )}
          </Button>
        </CardFooter>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-destructive/10 border border-destructive/30 rounded-md text-destructive flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2" />
          <p>{error}</p>
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-center text-primary">Generated Titles:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestions.map((title, index) => (
              <li
                key={index}
                className="bg-card border border-border p-4 rounded-lg shadow-md text-center cursor-pointer hover:border-primary transition-colors"
                onClick={() => {
                  navigator.clipboard.writeText(title);
                  toast({ title: "Copied!", description: `"${title}" copied to clipboard.` });
                }}
              >
                <p className="text-lg font-medium text-primary-foreground">{title}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}
