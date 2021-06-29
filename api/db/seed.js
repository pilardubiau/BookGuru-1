const seedBooks = [
    {
        title: "Martín Fierro",
        author: "José Hernández",
        img: "https://www.alianzaeditorial.es/imagenes/libros/grande/9788420656403-martin-fierro.jpg",
        rating: 4.8,
        category: "Classic",
        price: 10,
        stock: 12,
        publisher: "John Doe Editions",
        maturityRating: "Recommended for all audiences",
        description: "The story about the rebel Gaucho, one of the most famous pieces of argentine literature"
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        img: "http://books.google.com/books/content?id=1o7D0m_osFEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        rating: 4.9,
        category: "Fiction",
        price: 15.5,
        stock: 18,
        publisher: "Rowman & Littlefield",
        maturityRating: "Recommended for all audiences",
        description: "There is a plot, Harry Potter. A plot to make most terrible things happen at Hogwarts School of Witchcraft and Wizardry this year.' Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true. Having now become classics of our time, the Harry Potter ebooks never fail to bring comfort and escapism to readers of all ages. With its message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers."
    },
    {
        title: "The Sandman Vol. 1: Preludes & Nocturnes",
        author: "Neil Gaiman",
        img: "http://books.google.com/books/content?id=AfW0AAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        rating: 4.8,
        category: "Comics & Graphic Novels",
        price: 15.99,
        stock: 8,
        publisher: "DC",
        maturityRating: "Recommended for all audiences",
        description: "NEW YORK TIMES bestselling author Neil Gaiman's transcendent series SANDMAN is often hailed as the definitive Vertigo title and one of the finest achievements in graphic storytelling. Gaiman created an unforgettable tale of the forces that exist beyond life and death by weaving ancient mythology, folklore and fairy tales with his own distinct narrative vision. In PRELUDES & NOCTURNES, an occultist attempting to capture Death to bargain for eternal life traps her younger brother Dream instead. After his seventy-year imprisonment and eventual escape, Dream, also known as Morpheus, goes on a quest for his lost objects of power. On his arduous journey Morpheus encounters Lucifer, John Constantine, and an all-powerful madman. This book also includes the story \"The Sound of Her Wings,\" which introduces us to the pragmatic and perky goth girl Death. Collecting issues #1-8, this new edition of PRELUDES & NOCTURNES features the improved production values and coloring from the Absolute Edition."
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        img: "http://books.google.com/books/content?id=GL7BrQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70PONzfYnKNannawhaPS3tnMEj1M50hZUCTbSEzH4cHXBWojNfIcp5mpN77vxYMYsQXUnwrkOO5I4Y-n6ZirXCompIHNR9KFkai5gXgRa6SFgzzpOa0yZJDE-tVtcvSatusvJ0i&source=gbs_api",
        rating: 4.8,
        category: "Fiction",
        price: 8,
        stock: 5,
        publisher: "CreateSpace Independent Publishing Platform",
        maturityRating: "Recommended for all audiences",
        description: "Moby-Dick; or, The Whale is a novel by Herman Melville, in which Ishmael narrates the monomaniacal quest of Ahab, captain of the whaler Pequod, for revenge on the albino sperm whale Moby Dick, which on a previous voyage destroyed Ahab's ship and severed his leg at the knee. Although the novel was a commercial failure and out of print at the time of the author's death in 1891, its reputation grew immensely during the twentieth century. D. H. Lawrence called it \"one of the strangest and most wonderful books in the world,\" and \"the greatest book of the sea ever written.\" Moby-Dick is considered a Great American Novel and an outstanding work of the Romantic period in America and the American Renaissance. \"Call me Ishmael\" is one of world literature's most famous opening sentences. The product of a year and a half of writing, the book is dedicated to Nathaniel Hawthorne, \"in token of my admiration for his genius,\" and draws on Melville's experience at sea, on his reading in whaling literature, and on literary inspirations such as Shakespeare and the Bible. The detailed and realistic descriptions of whale hunting and of extracting whale oil, as well as life aboard ship among a culturally diverse crew, are mixed with exploration of class and social status, good and evil, and the existence of God. In addition to narrative prose, Melville uses styles and literary devices ranging from songs, poetry and catalogs to Shakespearean stage directions, soliloquies and asides. The author changed the title at the very last moment in September 1851. The work first appeared as The Whale in London in October 1851, and then under its definitive title Moby-Dick in New York in November. The whale, however, appears in both the London and New York editions as \"Moby Dick,\" with no hyphen. The British edition of five hundred copies was not reprinted during the author's life, the American of almost three thousand was reprinted three times at approximately 250 copies, the last reprinting in 1871. These figures are exaggerated because three hundred copies were destroyed in a fire at Harper's; only 3,200 copies were actually sold during the author's life."
    },
    {
        title: "Introduction to Quantum Mechanics",
        author: "David J. Griffiths, Darrell F. Schroeter",
        img: "http://books.google.com/books/publisher/content?id=82FjDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72OSAkI3RKMi3HqIASQZvKY8sbutpXnsCHVmg6gwhs-2a1xlNya5uZhJCIBPxg8pIGUYSBeUHr7xZJzjWFJTrYRN2Z9tjAjbtwrxkfZBWpleqCfjNaDzplwfd0e545bXT-lU9Ri&source=gbs_api",
        rating: 4.6,
        category: "Science",
        price: 8,
        stock: 5,
        publisher: "Cambridge University Press",
        maturityRating: "Recommended for all audiences",
        description: "Changes and additions to the new edition of this classic textbook include a new chapter on symmetries, new problems and examples, improved explanations, more numerical problems to be worked on a computer, new applications to solid state physics, and consolidated treatment of time-dependent potentials."
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        img: "http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        rating: 4.5,
        category: "Fiction",
        price: 400,
        stock: 20,
        publisher: "Open Court",
        maturityRating: "NOT_MATURE",
        description: "A PBS Great American Read Top 100 Pick One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins. From Sauron's fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings to him, but always he searched for the One Ring that would complete his dominion. When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom. The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider. This new edition includes the fiftieth-anniversary fully corrected text setting and, for the first time, an extensive new index. J.R.R. Tolkien (1892-1973), beloved throughout the world as the creator of The Hobbit, The Lord of the Rings, and The Silmarillion, was a professor of Anglo-Saxon at Oxford, a fellow of Pembroke College, and a fellow of Merton College until his retirement in 1959. His chief interest was the linguistic aspects of the early English written tradition, but while he studied classic works of the past, he was creating a set of his own."
    },
    {
        title: "Studies in J. D. Salinger: Reviews, Essays, and Critiques of The Catcher in the Rye, and Other Fiction",
        author: "Marvin Laser, Norman Fruman",
        img: "http://books.google.com/books/content?id=yEhbAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        rating: 5,
        category: "Fiction",
        price: 200,
        stock: 16,
        publisher: "Public",
        maturityRating: "NOT_MATURE",
        description: "Collects essays that look at J.D. Salinger's The Catcher in the Rye through a philosophical approach."
    },
    {
        title: "Rayuela",
        author: "Julio Cortázar",
        img: "https://www.actualidadliteratura.com/wp-content/uploads/2017/02/An%C3%A1lisis-de-Rayuela-de-Julio-Cort%C3%A1zar.jpg",
        rating: 4,
        category: "Fiction",
        price: 600,
        stock: 22,
        publisher: "Catedra Ediciones",
        maturityRating: "NOT_MATURE",
        description: "Por primera vez se edita «Rayuela» como un clásico de la novela contemporánea. Todo el conjunto de materiales que aporta esta edición (introducción, abundantes notas, plano, fotografías) servirán al lector para comprender mejor y disfrutar más con esta gran novela. Al aclararse tantas alusiones y técnicas narrativas, resplandece con más claridad el sentido profundo del relato: la búsqueda constante, el humor, el juego, la nostalgia de una verdadera vida, el paso soñado «de la tierra al cielo»..."
    },
]

module.exports = seedBooks;