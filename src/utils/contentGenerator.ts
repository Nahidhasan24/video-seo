
export interface GeneratedContent {
  description: string;
  keywords: string[];
  tags: string[];
  thumbnailPrompt: string;
}

export const generateYouTubeContent = (title: string): GeneratedContent => {
  const titleLower = title.toLowerCase();
  
  // Generate description based on title analysis
  const generateDescription = () => {
    let description = `In this video, we dive deep into ${title.toLowerCase()}. `;
    
    if (titleLower.includes('how to') || titleLower.includes('tutorial')) {
      description += `Follow our step-by-step guide to master this topic and achieve amazing results. `;
    } else if (titleLower.includes('top') || titleLower.includes('best')) {
      description += `We've carefully selected and reviewed each item to bring you only the highest quality options. `;
    } else if (titleLower.includes('review')) {
      description += `Get an honest, in-depth analysis before making your decision. `;
    } else {
      description += `Discover valuable insights and practical tips that you can implement right away. `;
    }
    
    description += `Don't forget to like this video if it helped you, subscribe for more amazing content, and let us know your thoughts in the comments below! Watch till the end for a special bonus tip that could change everything.`;
    
    return description;
  };

  // Generate keywords based on title
  const generateKeywords = () => {
    const baseKeywords = [];
    const words = title.split(' ').filter(word => word.length > 2);
    
    // Add title-based keywords
    words.forEach(word => {
      if (!['the', 'and', 'for', 'with', 'how', 'best', 'top'].includes(word.toLowerCase())) {
        baseKeywords.push(word.toLowerCase());
      }
    });
    
    // Add contextual keywords
    const contextKeywords = [
      'tutorial', 'guide', 'tips', 'tricks', 'review', 'how to', 
      'step by step', 'beginner friendly', 'expert advice', 'latest',
      'trending', 'viral', 'must watch', 'game changer', 'secret'
    ];
    
    return [...baseKeywords, ...contextKeywords.slice(0, 10)].slice(0, 15);
  };

  // Generate tags
  const generateTags = () => {
    const tags = ['#Trending', '#Viral', '#MustWatch'];
    
    if (titleLower.includes('ai') || titleLower.includes('artificial')) tags.push('#AI', '#Tech');
    if (titleLower.includes('money') || titleLower.includes('income')) tags.push('#MakeMoneyOnline', '#SideHustle');
    if (titleLower.includes('tutorial') || titleLower.includes('how')) tags.push('#Tutorial', '#HowTo');
    if (titleLower.includes('review')) tags.push('#Review', '#Honest');
    if (titleLower.includes('2024') || titleLower.includes('2025')) tags.push('#2024', '#Latest');
    
    return tags.slice(0, 8);
  };

  // Generate thumbnail prompt
  const generateThumbnailPrompt = () => {
    let prompt = "YouTube thumbnail style, high contrast, bright colors, ";
    
    if (titleLower.includes('money') || titleLower.includes('income')) {
      prompt += "excited person holding money, dollar signs floating, green and gold colors, wealth symbols, ";
    } else if (titleLower.includes('ai') || titleLower.includes('tech')) {
      prompt += "futuristic tech background, glowing screens, person with amazed expression, blue and purple neon colors, ";
    } else if (titleLower.includes('secret') || titleLower.includes('hidden')) {
      prompt += "mysterious person with finger on lips, dark background with bright spotlight, intrigue and curiosity, ";
    } else {
      prompt += "confident person pointing at viewer, bright background, excited facial expression, ";
    }
    
    prompt += "bold text overlay suggesting the main topic, arrow pointing to key element, shocked or excited emotion, professional lighting";
    
    return prompt;
  };

  return {
    description: generateDescription(),
    keywords: generateKeywords(),
    tags: generateTags(),
    thumbnailPrompt: generateThumbnailPrompt()
  };
};
