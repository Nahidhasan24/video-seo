
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Tag } from 'lucide-react';

interface KeywordsSectionProps {
  keywords: string[];
  onCopy: (text: string, type: string) => void;
}

const KeywordsSection: React.FC<KeywordsSectionProps> = ({
  keywords,
  onCopy
}) => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Tag className="w-5 h-5 mr-2 text-green-500" />
            Keywords
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onCopy(keywords.join(', '), 'Keywords')}
            className="hover:bg-green-50"
          >
            <Copy className="w-4 h-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {keyword}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default KeywordsSection;
