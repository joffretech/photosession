import { ImageUploadForm } from '@/components/title-generator/ImageUploadForm';

export default function TitleGeneratorPage() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80">
          AI-Powered Title Generator
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Unleash creativity with AI. Upload your image or graphic, and our intelligent system will suggest short, catchy titles that perfectly complement your visual content while adhering to brand guidelines.
        </p>
      </section>

      <section>
        <ImageUploadForm />
      </section>
    </div>
  );
}
