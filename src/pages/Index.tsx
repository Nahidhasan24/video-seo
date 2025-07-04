
import React, { useState } from 'react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import TitleInputSection from '@/components/TitleInputSection';
import DescriptionSection from '@/components/DescriptionSection';
import KeywordsSection from '@/components/KeywordsSection';
import TagsSection from '@/components/TagsSection';
import ThumbnailSection from '@/components/ThumbnailSection';
import { generateYouTubeContent, GeneratedContent } from '@/utils/contentGenerator';
import { generateThumbnailImage, downloadThumbnail } from '@/utils/thumbnailUtils';

const Index = () => {
  const [title, setTitle] = useState('');
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [thumbnailImage, setThumbnailImage] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  const generateContent = () => {
    if (!title.trim()) {
      toast.error('Please enter a video title');
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation with realistic delay
    setTimeout(() => {
      const content = generateYouTubeContent(title);
      setGeneratedContent(content);
      setIsGenerating(false);
      toast.success('Content generated successfully!');
      
      // Auto-generate thumbnail image after content is generated
      generateThumbnailImage(content.thumbnailPrompt, setThumbnailImage, setIsGeneratingImage);
    }, 2000);
  };

  const handleDownloadThumbnail = () => {
    downloadThumbnail(thumbnailImage);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <TitleInputSection
          title={title}
          setTitle={setTitle}
          onGenerate={generateContent}
          isGenerating={isGenerating}
        />

        {generatedContent && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DescriptionSection
              description={generatedContent.description}
              onCopy={copyToClipboard}
            />

            <KeywordsSection
              keywords={generatedContent.keywords}
              onCopy={copyToClipboard}
            />

            <TagsSection
              tags={generatedContent.tags}
              onCopy={copyToClipboard}
            />

            <ThumbnailSection
              thumbnailImage={thumbnailImage}
              isGeneratingImage={isGeneratingImage}
              onDownloadThumbnail={handleDownloadThumbnail}
            />
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>Transform your YouTube titles into treasure with AI-powered optimization and thumbnail generation</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
