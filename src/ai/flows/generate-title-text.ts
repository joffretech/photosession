'use server';
/**
 * @fileOverview Generates title text suggestions for an image, ensuring they are short,
 * complement the image, and adhere to company guidelines.
 *
 * - generateTitleText - A function that generates title text suggestions for an image.
 * - GenerateTitleTextInput - The input type for the generateTitleText function.
 * - GenerateTitleTextOutput - The return type for the generateTitleText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTitleTextInputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "A photo or graphic to generate title text suggestions for, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateTitleTextInput = z.infer<typeof GenerateTitleTextInputSchema>;

const GenerateTitleTextOutputSchema = z.object({
  titleSuggestions: z.array(z.string()).describe('An array of suggested title texts.'),
});
export type GenerateTitleTextOutput = z.infer<typeof GenerateTitleTextOutputSchema>;

export async function generateTitleText(input: GenerateTitleTextInput): Promise<GenerateTitleTextOutput> {
  return generateTitleTextFlow(input);
}

const isTextAcceptableTool = ai.defineTool({
  name: 'isTextAcceptable',
  description: 'This tool checks if the provided text adheres to company guidelines and is appropriate for use.',
  inputSchema: z.object({
    text: z.string().describe('The text to be checked.'),
  }),
  outputSchema: z.boolean(),
},
async (input) => {
  // Placeholder: Replace with actual implementation to check company guidelines.
  // For demonstration purposes, always returns true.
  return true;
});

const generateTitleTextPrompt = ai.definePrompt({
  name: 'generateTitleTextPrompt',
  input: {schema: GenerateTitleTextInputSchema},
  output: {schema: GenerateTitleTextOutputSchema},
  tools: [isTextAcceptableTool],
  prompt: `You are a creative copywriter tasked with generating title text suggestions for images or graphics.

  The title text should be:
  - Short (under 15 characters)
  - Complementary to the image
  - Adhere to company guidelines (use the isTextAcceptable tool to verify each suggestion)

  Generate at least 3 title text suggestions. Use the {{media url=imageDataUri}} to understand the image.
  Ensure each title is checked against company guidelines using the isTextAcceptable tool.
`,
});

const generateTitleTextFlow = ai.defineFlow(
  {
    name: 'generateTitleTextFlow',
    inputSchema: GenerateTitleTextInputSchema,
    outputSchema: GenerateTitleTextOutputSchema,
  },
  async input => {
    const {output} = await generateTitleTextPrompt(input);
    return output!;
  }
);
