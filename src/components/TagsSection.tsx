
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Hash } from 'lucide-react';

interface TagsSectionProps {
  tags: string[];
  onCopy: (text: string, type: string) => void;
}

const TagsSection: React.FC<TagsSectionProps> = ({
  tags,
  onCopy
}) => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Hash className="w-5 h-5 mr-2 text-purple-500" />
            Tags
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onCopy(tags.join(' '), 'Tags')}
            className="hover:bg-purple-50"
          >
            <Copy className="w-4 h-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TagsSection;
