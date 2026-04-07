export interface Service {
    id: number
    category: 'manos' | 'pies'
    nameEs: string
    nameEn: string
    price: number
    image: string
}

// Nota: las URLs de Facebook CDN expiran. Migrar a /public/img/ o Cloudinary.
export const services: Service[] = [
    {
        id: 1, category: 'manos',
        nameEs: 'Uñas Acrílicas', nameEn: 'Acrylic Nails',
        price: 10000,
        image: 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/473727165_1226891792317941_327541263222285916_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JR-gj4hsahAQ7kNvwHquYrK&_nc_oc=AdlMFvJVII9oOc0mOA7HIvpx2D4OBWtLKG7-9UhwrIbBleD0u8XkK112VovvYFiVjC5RTMhNAB5ZcD14je7A8CMj&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=6T4B8TJN0SF-iiEMkPnKnw&oh=00_AfFyy1a3Jn-2JDUIy_-7i4JGQHyk0tI5oEZLdg7KuHglRg&oe=68030FCD'
    },
    {
        id: 2, category: 'manos',
        nameEs: 'Uñas Acrílicas', nameEn: 'Acrylic Nails',
        price: 10000,
        image: 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/473018388_1226891825651271_4656245532535550392_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hjjTTNCNK7gQ7kNvwFGem0B&_nc_oc=Adn6FlurRQbK4TT8M25xZMXhHza365KFtxhRfh7xXoMIBUhu7x0OSOkpyDekHL-O8vXtpD6K4-7rmCAVo9XL7elT&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=6T4B8TJN0SF-iiEMkPnKnw&oh=00_AfH8Zf7W2D0k0RWKAnUun-sTQoibxR4ddgM_0gxpAl6FBQ&oe=68032978'
    },
    {
        id: 3, category: 'manos',
        nameEs: 'Uñas Acrílicas', nameEn: 'Acrylic Nails',
        price: 10000,
        image: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/472849749_1226891855651268_8289050644886066405_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FHtOTiVAOkMQ7kNvwHcc7eg&_nc_oc=AdkcPp2OR0l_jIGlJ-dZvx2xQ08CEB4w57ZghgAM_TtLnVjI-nHFk6YVIMvKHZct1_6zoxAoswME6SPfwrU-goyr&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=6T4B8TJN0SF-iiEMkPnKnw&oh=00_AfFsTkA-gs3UVLSYgue2rqIBEwXStys6Txfq7vS7Hap0YQ&oe=68031F16'
    },
    {
        id: 4, category: 'manos',
        nameEs: 'Gel de Calcio', nameEn: 'Calcium Gel',
        price: 12500,
        image: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/487560515_703736932227344_1736497066589792599_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=y_1L8UKihigQ7kNvwGPNwLd&_nc_oc=AdkXGndH9LX_w5ZZLvJl_UrDhgzrlhC9e30ShUm2qJ2M0vkBPYypbEPNTjhik0EF0hNIr8sn2RA6-QIizpk1U5lU&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=Nw96SfVevHGCBeE0_Ibrlg&oh=00_AfEYKqwL2CgR4YvZiHVhCTyPqjLBZNW8xhejBrFQKZQwTQ&oe=6802827F'
    },
    {
        id: 5, category: 'manos',
        nameEs: 'Semipermanente', nameEn: 'Semi-permanent',
        price: 8000,
        image: 'https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/465464554_8583980625020855_6737056848273746197_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nmbYkkV4XqcQ7kNvwGxdU2x&_nc_oc=AdkStZJAVEmr99LOgW_5Uq4904KSD7tsbW6-Q6ukpq9G-f1aVOwmBCQTXTl_kUnVm0QZ43mmFAJ17oGOq8UA_F0i&_nc_zt=23&_nc_ht=scontent-qro1-2.xx&_nc_gid=by_wUZR9alKOXmNAbBbu6g&oh=00_AfEIqIJZ-dVsayPY991V3ODb27oKIUJD0-cSupplhpq9CA&oe=68031C40'
    },
    {
        id: 6, category: 'manos',
        nameEs: 'Gel X', nameEn: 'Gel X',
        price: 15000,
        image: 'https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/466100071_8583980871687497_4509107432998959108_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xqgJezD26vIQ7kNvwFOjV0j&_nc_oc=Adl65ZS4K2Vy8sjmQwnXJaERa6jeKiRu_ijjf1tAVWJTHQK12Nrl8ehAMMrWaCW7T1U5-EWMECBynGpYZBHDS91O&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=by_wUZR9alKOXmNAbBbu6g&oh=00_AfFU6-b5D_VaDQyrXD9McD9dGhpCFxm5jUJChGDTpY0Unw&oe=68032D83'
    }
]

export const serviceOptions = {
    es: ['Uñas Acrílicas', 'Gel de Calcio', 'Moldeadas', 'Gel X', 'Encapsuladas', 'Semipermanente', 'Manicure Spa', 'Pedicure Spa'],
    en: ['Acrylic Nails', 'Calcium Gel', 'Molded', 'Gel X', 'Encapsulated', 'Semi-permanent', 'Spa Manicure', 'Spa Pedicure']
}