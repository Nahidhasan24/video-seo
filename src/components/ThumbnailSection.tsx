
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Image, Download } from 'lucide-react';
import { toast } from 'sonner';

interface ThumbnailSectionProps {
  thumbnailImage: string;
  isGeneratingImage: boolean;
  onDownloadThumbnail: () => void;
}

const ThumbnailSection: React.FC<ThumbnailSectionProps> = ({
  thumbnailImage,
  isGeneratingImage,
  onDownloadThumbnail
}) => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Image className="w-5 h-5 mr-2 text-orange-500" />
            AI Generated Thumbnail
          </div>
          {thumbnailImage && (
            <Button
              variant="outline"
              size="sm"
              onClick={onDownloadThumbnail}
              className="hover:bg-green-50"
            >
              <Download className="w-4 h-4 mr-1" />
              Download
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isGeneratingImage && (
            <div className="flex items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
              <div className="flex items-center text-gray-500">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-500 mr-3"></div>
                Generating your thumbnail...
              </div>
            </div>
          )}
          {thumbnailImage && (
            <div className="border rounded-lg overflow-hidden">
              <img 
                src={thumbnailImage} 
                alt="AI Generated Thumbnail" 
                className="w-full h-auto max-w-full object-contain"
                onError={() => {
                  toast.error('Failed to load thumbnail image');
                }}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ThumbnailSection;
