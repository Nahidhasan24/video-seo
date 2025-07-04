
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Copy } from 'lucide-react';

interface DescriptionSectionProps {
  description: string;
  onCopy: (text: string, type: string) => void;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  description,
  onCopy
}) => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Copy className="w-5 h-5 mr-2 text-blue-500" />
            Description
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onCopy(description, 'Description')}
            className="hover:bg-blue-50"
          >
            <Copy className="w-4 h-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={description}
          readOnly
          className="min-h-[120px] text-sm leading-relaxed"
        />
      </CardContent>
    </Card>
  );
};

export default DescriptionSection;
