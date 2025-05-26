// src/data/commentData.ts

export interface Comment {
    id: number;
    id_card: string; // Vínculo com o card
    name: string;
    comment: string;
    avatar: string;
}

export const comments: Comment[] = [
    {
        id: 1,
        id_card: '1',
        name: 'João Silva',
        comment: 'A basílica é perfeita, não é só um marco na história do Pará, como do catolicismo por inteiro!!',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
        id: 2,
        id_card: '2',
        name: 'Maria Souza',
        comment: 'Adorei visitar, recomendo a todos!',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
        id: 3,
        id_card: '3',
        name: 'Carlos Lima',
        comment: 'Perfeito para um passeio tranquilo com a família.',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
        id: 4,
        id_card: '4',
        name: 'Ana Paula',
        comment: 'Experiência incrível! Voltarei em breve.',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        id: 5,
        id_card: '5',
        name: 'Ricardo Alves',
        comment: 'Ambiente acolhedor e bem organizado.',
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
        id: 6,
        id_card: '6',
        name: 'Fernanda Carvalho',
        comment: 'Ótima infraestrutura e atendimento excelente.',
        avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
        id: 7,
        id_card: '7',
        name: 'Paulo Henrique',
        comment: 'Lugar tranquilo, ótimo para relaxar.',
        avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
        id: 8,
        id_card: '8',
        name: 'Juliana Mendes',
        comment: 'Diversão garantida para todas as idades!',
        avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
    },
    {
        id: 9,
        id_card: '9',
        name: 'Mateus Fernandes',
        comment: 'Amei cada detalhe, tudo perfeito.',
        avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
    },
    {
        id: 10,
        id_card: '10',
        name: 'Beatriz Rocha',
        comment: 'Ambiente muito bonito e bem cuidado.',
        avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
    {
        id: 11,
        id_card: '11',
        name: 'Gustavo Ribeiro',
        comment: 'Vale muito a pena conhecer, recomendo!',
        avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    },
    {
        id: 12,
        id_card: '12',
        name: 'Carla Mendes',
        comment: 'Lugar perfeito para passeios em família.',
        avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    {
        id: 13,
        id_card: '13',
        name: 'Rafael Costa',
        comment: 'Atendimento cordial e ambiente agradável.',
        avatar: 'https://randomuser.me/api/portraits/men/13.jpg',
    },
    {
        id: 14,
        id_card: '14',
        name: 'Sabrina Nunes',
        comment: 'Fiquei encantada com a experiência.',
        avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
    },
    {
        id: 15,
        id_card: '15',
        name: 'Lucas Martins',
        comment: 'Recomendo para quem quer conhecer algo diferente.',
        avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
    },
];
