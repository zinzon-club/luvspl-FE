export interface BtnProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export interface AnalyzingResultprops {
    type: 'stat' | 'advice';
    often?: string;
    min?: number;
    max?: number;
    advice?: string[];
}