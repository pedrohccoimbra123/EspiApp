// src/data/commentData.ts

export type Comment = {
    id: number;
    id_card: string; // ou number, dependendo do seu dado
    name: string;
    comment: string;
    avatar: string;
};

export const comments: Comment[] = [
    { id: 1, id_card: '1', name: 'João Silva', comment: 'A basílica é perfeita, não é só um marco na história do Pará, como do catolicismo por inteiro!!', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, id_card: '2', name: 'Maria Souza', comment: 'Adorei visitar, recomendo a todos!', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, id_card: '3', name: 'Carlos Lima', comment: 'Perfeito para um passeio tranquilo com a família.', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 4, id_card: '4', name: 'Ana Paula', comment: 'Experiência incrível! Voltarei em breve.', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, id_card: '5', name: 'Ricardo Alves', comment: 'Ambiente acolhedor e bem organizado.', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: 6, id_card: '6', name: 'Fernanda Carvalho', comment: 'Ótima infraestrutura e atendimento excelente.', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { id: 7, id_card: '7', name: 'Paulo Henrique', comment: 'Lugar tranquilo, ótimo para relaxar.', avatar: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { id: 8, id_card: '8', name: 'Juliana Mendes', comment: 'Diversão garantida para todas as idades!', avatar: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { id: 9, id_card: '9', name: 'Mateus Fernandes', comment: 'Amei cada detalhe, tudo perfeito.', avatar: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { id: 10, id_card: '10', name: 'Beatriz Rocha', comment: 'Ambiente muito bonito e bem cuidado.', avatar: 'https://randomuser.me/api/portraits/women/10.jpg' },
    { id: 11, id_card: '11', name: 'Gustavo Ribeiro', comment: 'Vale muito a pena conhecer, recomendo!', avatar: 'https://randomuser.me/api/portraits/men/11.jpg' },
    { id: 12, id_card: '12', name: 'Carla Mendes', comment: 'Lugar perfeito para passeios em família.', avatar: 'https://randomuser.me/api/portraits/women/12.jpg' },
    { id: 13, id_card: '13', name: 'Rafael Costa', comment: 'Atendimento cordial e ambiente agradável.', avatar: 'https://randomuser.me/api/portraits/men/13.jpg' },
    { id: 14, id_card: '14', name: 'Sabrina Nunes', comment: 'Fiquei encantada com a experiência.', avatar: 'https://randomuser.me/api/portraits/women/14.jpg' },
    { id: 15, id_card: '15', name: 'Lucas Martins', comment: 'Recomendo para quem quer conhecer algo diferente.', avatar: 'https://randomuser.me/api/portraits/men/15.jpg' },
    { id: 16, id_card: '16', name: 'Bruno Silva', comment: 'Local incrível e muito bem cuidado.', avatar: 'https://randomuser.me/api/portraits/men/16.jpg' },
    { id: 17, id_card: '17', name: 'Camila Santos', comment: 'Espaço maravilhoso, com muita cultura.', avatar: 'https://randomuser.me/api/portraits/women/17.jpg' },
    { id: 18, id_card: '18', name: 'Daniel Souza', comment: 'Perfeito para aprender mais sobre a história da cidade.', avatar: 'https://randomuser.me/api/portraits/men/18.jpg' },
    { id: 19, id_card: '19', name: 'Aline Costa', comment: 'Amo vir aqui aos finais de semana!', avatar: 'https://randomuser.me/api/portraits/women/19.jpg' },
    { id: 20, id_card: '20', name: 'Pedro Henrique', comment: 'O pôr do sol visto daqui é surreal.', avatar: 'https://randomuser.me/api/portraits/men/20.jpg' },
    { id: 21, id_card: '21', name: 'Renata Lima', comment: 'Espaço ótimo para caminhar e relaxar.', avatar: 'https://randomuser.me/api/portraits/women/21.jpg' },
    { id: 22, id_card: '22', name: 'Fábio Gonçalves', comment: 'A arquitetura é simplesmente impressionante.', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
    { id: 23, id_card: '23', name: 'Larissa Almeida', comment: 'Perfeito para quem gosta de história e cultura.', avatar: 'https://randomuser.me/api/portraits/women/23.jpg' },
    { id: 24, id_card: '5', name: 'Gabriel Rocha', comment: 'O estádio tem uma energia incrível em dia de jogo.', avatar: 'https://randomuser.me/api/portraits/men/24.jpg' },
    { id: 25, id_card: '7', name: 'Bianca Ferreira', comment: 'A natureza aqui é maravilhosa.', avatar: 'https://randomuser.me/api/portraits/women/25.jpg' },
    { id: 26, id_card: '9', name: 'Vitor Santos', comment: 'Melhor lugar para curtir o final de tarde.', avatar: 'https://randomuser.me/api/portraits/men/26.jpg' },
    { id: 27, id_card: '11', name: 'Patrícia Melo', comment: 'Perfeito para crianças e adultos.', avatar: 'https://randomuser.me/api/portraits/women/27.jpg' },
    { id: 28, id_card: '13', name: 'Diego Moreira', comment: 'Praça muito bem cuidada e segura.', avatar: 'https://randomuser.me/api/portraits/men/28.jpg' },
    { id: 29, id_card: '15', name: 'Natália Farias', comment: 'A ilha é um verdadeiro paraíso!', avatar: 'https://randomuser.me/api/portraits/women/29.jpg' },
    { id: 30, id_card: '17', name: 'Felipe Oliveira', comment: 'Teatro simplesmente espetacular.', avatar: 'https://randomuser.me/api/portraits/men/30.jpg' },
    { id: 31, id_card: '19', name: 'Marina Souza', comment: 'Espaço que exala cultura.', avatar: 'https://randomuser.me/api/portraits/women/31.jpg' },
    { id: 32, id_card: '21', name: 'Rodrigo Martins', comment: 'Lugar muito agradável, principalmente no final de semana.', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 33, id_card: '23', name: 'Clara Lima', comment: 'Perfeito para fotos, recomendo muito!', avatar: 'https://randomuser.me/api/portraits/women/33.jpg' },
    { id: 34, id_card: '3', name: 'Luana Ribeiro', comment: 'Tacacá maravilhoso, sabor inigualável.', avatar: 'https://randomuser.me/api/portraits/women/34.jpg' },
    { id: 35, id_card: '6', name: 'Henrique Carvalho', comment: 'Torcer no Baenão é uma experiência única.', avatar: 'https://randomuser.me/api/portraits/men/35.jpg' },
    { id: 36, id_card: '8', name: 'Isabela Silva', comment: 'Ver-o-Peso tem um charme que só quem vem entende.', avatar: 'https://randomuser.me/api/portraits/women/36.jpg' },
    { id: 37, id_card: '10', name: 'Samuel Pereira', comment: 'Um pedaço da história de Belém, sensacional.', avatar: 'https://randomuser.me/api/portraits/men/37.jpg' },
    { id: 38, id_card: '12', name: 'Viviane Campos', comment: 'Floresta no meio da cidade, perfeito!', avatar: 'https://randomuser.me/api/portraits/women/38.jpg' },
    { id: 39, id_card: '14', name: 'Thiago Fernandes', comment: 'Praça muito cultural e cheia de vida.', avatar: 'https://randomuser.me/api/portraits/men/39.jpg' },
    { id: 40, id_card: '16', name: 'Letícia Ramos', comment: 'Ótimo para comprar produtos locais.', avatar: 'https://randomuser.me/api/portraits/women/40.jpg' },
    { id: 41, id_card: '18', name: 'Leonardo Souza', comment: 'Museu muito bem organizado, recomendo.', avatar: 'https://randomuser.me/api/portraits/men/41.jpg' },
    { id: 42, id_card: '20', name: 'Bruna Dias', comment: 'O café daqui tem uma vista incrível.', avatar: 'https://randomuser.me/api/portraits/women/42.jpg' },
    { id: 43, id_card: '22', name: 'Caio Lima', comment: 'A igreja é simplesmente magnífica.', avatar: 'https://randomuser.me/api/portraits/men/43.jpg' },
    { id: 44, id_card: '4', name: 'Ana Clara', comment: 'A torcida aqui é coisa de outro mundo!', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 45, id_card: '5', name: 'Eduardo Barros', comment: 'O Mangueirão tem uma vibe surreal em dias de clássico.', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { id: 46, id_card: '7', name: 'Sueli Almeida', comment: 'Contato direto com a natureza, perfeito.', avatar: 'https://randomuser.me/api/portraits/women/46.jpg' },
    { id: 47, id_card: '9', name: 'Bruno Ferreira', comment: 'Perfeito para happy hour com os amigos.', avatar: 'https://randomuser.me/api/portraits/men/47.jpg' },
    { id: 48, id_card: '11', name: 'Michele Souza', comment: 'A fauna e flora são de tirar o fôlego.', avatar: 'https://randomuser.me/api/portraits/women/48.jpg' },
    { id: 49, id_card: '13', name: 'Alex Santana', comment: 'Ambiente limpo, organizado e familiar.', avatar: 'https://randomuser.me/api/portraits/men/49.jpg' },
    { id: 50, id_card: '17', name: 'Tatiane Silva', comment: 'Melhor teatro que já visitei, experiência incrível.', avatar: 'https://randomuser.me/api/portraits/women/50.jpg' },
];
