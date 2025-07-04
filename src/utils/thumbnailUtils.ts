
import { toast } from 'sonner';

export const generateThumbnailImage = async (
  prompt: string,
  setThumbnailImage: (url: string) => void,
  setIsGeneratingImage: (loading: boolean) => void
) => {
  setIsGeneratingImage(true);
  try {
    // Using Pollinations AI - a free image generation service
    const encodedPrompt = encodeURIComponent(prompt);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1280&height=720&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;
    
    // Add a small delay to simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setThumbnailImage(imageUrl);
    toast.success('Thumbnail generated successfully!');
  } catch (error) {
    toast.error('Failed to generate thumbnail');
    console.error('Error generating thumbnail:', error);
  } finally {
    setIsGeneratingImage(false);
  }
};

export const downloadThumbnail = async (thumbnailImage: string) => {
  if (!thumbnailImage) return;
  
  try {
    const response = await fetch(thumbnailImage);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `youtube-thumbnail-${Date.now()}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    toast.success('Thumbnail downloaded!');
  } catch (error) {
    toast.error('Failed to download thumbnail');
    console.error('Error downloading thumbnail:', error);
  }
};
