
import { MusicGenre, MusicTrack, BlogPost } from './types';

export const TRACKS: MusicTrack[] = [
  {
    id: '1',
    title: '失落之城的低语',
    titleEn: 'Whispers of Lost City',
    genre: MusicGenre.Game,
    category: 'works',
    coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    description: '为某未公开AAA角色扮演游戏创作的主题曲。'
  },
  {
    id: '2',
    title: '霓虹雨夜',
    titleEn: 'Neon Rain Night',
    genre: MusicGenre.Electronic,
    category: 'works',
    coverUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    description: '赛博朋克风格的实验性合成器音景。'
  },
  {
    id: '3',
    title: '如果不曾遇见',
    titleEn: 'If Never Met',
    genre: MusicGenre.Pop,
    category: 'music',
    coverUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    description: '关于告别与重逢的深情唱作。'
  },
  {
    id: '4',
    title: '星云漫游',
    titleEn: 'Nebula Wanderer',
    genre: MusicGenre.Ambient,
    category: 'music',
    coverUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2070&auto=format&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    description: '旨在探索宇宙深处的宁静氛围音乐。'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: '1',
    date: '2024.05.20',
    content: '今天在录音室里捕捉到了一个非常奇妙的混响效果。这种像是在深海中呼吸的声音，也许会成为下一款独立游戏的核心旋律。',
    mood: 'Inspired',
    moodIcon: 'fa-lightbulb'
  },
  {
    id: '2',
    date: '2024.05.18',
    content: '深夜编曲，咖啡已经冷了。耳机里的旋律改了又改，追求完美果然是一场漫长的苦修。',
    mood: 'Contemplative',
    moodIcon: 'fa-moon'
  }
];
