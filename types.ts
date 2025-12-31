
export enum MusicGenre {
  Game = '游戏配乐 / Game OST',
  Pop = '原创流行 / Original Pop',
  Electronic = '电子实验 / Electronic',
  Ambient = '环境氛围 / Ambient'
}

export type TrackCategory = 'music' | 'works';

export interface MusicTrack {
  id: string;
  title: string;
  titleEn: string;
  genre: MusicGenre;
  category: TrackCategory;
  coverUrl: string;
  audioUrl: string;
  description: string;
}

export interface BlogPost {
  id: string;
  date: string;
  content: string;
  mood: string;
  moodIcon: string;
}

export type ViewState = 'home' | 'music' | 'works' | 'movie' | 'blog' | 'contact';
