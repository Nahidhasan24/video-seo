
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from 'lucide-react';

interface TitleInputSectionProps {
  title: string;
  setTitle: (title: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

const TitleInputSection: React.FC<TitleInputSectionProps> = ({
  title,
  setTitle,
  onGenerate,
  isGenerating
}) => {
  return (
    <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <Sparkles className="w-5 h-5 mr-2 text-yellow-500" />
          Enter Your Video Title
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <Input
            placeholder="e.g., Top 5 AI Tools to Make $500 Per Day in 2025"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 text-lg py-6 px-4 border-2 border-gray-200 focus:border-red-500 transition-colors"
            onKeyDown={(e) => e.key === 'Enter' && onGenerate()}
          />
          <Button 
            onClick={onGenerate}
            disabled={isGenerating}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold transition-all transform hover:scale-105"
          >
            {isGenerating ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Generating...
              </div>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Generate
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TitleInputSection;
