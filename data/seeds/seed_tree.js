/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries for the "Tree" table
  await knex('Tree').del();
  
    // Inserts seed entries for three users
    return knex('Tree').insert([
      {
        tree_id: 1,
        tree_name: 'Dwarf Lemon Tree',
        scientific_name: 'Citrus limon',
        tree_description: 'A compact tree with vibrant, citrus fruit.',
        tree_image: 'https://res.cloudinary.com/dchzjr4bz/image/upload/v1690882085/dwarf_lemon_tree_xvaz4p.jpg',
        tree_price: 34.99,
        fertilizer_name: 'Citrus-tone',
        water_requirement: 'Weekly'
    },
    {
        tree_id: 2,
        tree_name: 'Dwarf Cherry Tree',
        scientific_name: 'Prunus cerasus',
        tree_description: 'A small tree producing sweet cherries.',
        tree_image: 'https://res.cloudinary.com/dchzjr4bz/image/upload/v1690882084/dwarf_cherry_tree_kwents.jpg',
        tree_price: 39.99,
        fertilizer_name: 'Berry-tone',
        water_requirement: 'Twice a week'
    },
    {
        tree_id: 3,
        tree_name: 'Dwarf Banana Tree',
        scientific_name: 'Musa',
        tree_description: 'Compact tree with tropical appeal and edible fruits.',
        tree_image: 'https://res.cloudinary.com/dchzjr4bz/image/upload/v1690882083/dwarf_banana_tree_iqwuqy.jpg',
        tree_price: 44.99,
        fertilizer_name: 'Tropical-tone',
        water_requirement: 'Twice a week'
    },
    {
        tree_id: 4,
        tree_name: 'Dwarf Apple Tree',
        scientific_name: 'Malus domestica',
        tree_description: 'A compact tree, perfect for gardens, with crisp apples.',
        tree_image: 'https://res.cloudinary.com/dchzjr4bz/image/upload/v1690882080/dwarf_apple_oydomk.jpg',
        tree_price: 49.99,
        fertilizer_name: 'Tree-tone',
        water_requirement: 'Weekly'
    },
    {
        tree_id: 5,
        tree_name: 'Dwarf Banana Tree Variant',
        scientific_name: 'Musa Dwarf Cavendish',
        tree_description: 'A small variant of banana tree with delicious fruit.',
        tree_image: 'https://res.cloudinary.com/dchzjr4bz/image/upload/v1690882025/dwarf_banana_tree_iiavyr.jpg',
        tree_price: 46.99,
        fertilizer_name: 'Tropical-tone',
        water_requirement: 'Twice a week'
    },
    {
        tree_id: 6,
        tree_name: 'Dwarf Pear Tree',
        scientific_name: 'Pyrus communis',
        tree_description: 'Small fruit tree that produces juicy, delicious pears.',
        tree_image: 'https://res.cloudinary.com/dchzjr4bz/image/upload/v1690882024/21_Fruits_You_Can_Grow_in_Balcony_Rooftop___Patio_b45r0j.webp',
        tree_price: 42.99,
        fertilizer_name: 'Tree-tone',
        water_requirement: 'Weekly'
    },
    {
        tree_id: 7,
        tree_name: 'Dwarf Orange Tree',
        scientific_name: 'Citrus sinensis',
        tree_description: 'A dwarf variant of the orange tree, perfect for home gardens.',
        tree_image: 'https://res.cloudinary.com/dchzjr4bz/image/upload/v1690882023/21_Fruits_You_Can_Grow_in_Balcony_Rooftop___Patio_r5ondm.jpg',
        tree_price: 38.99,
        fertilizer_name: 'Citrus-tone',
        water_requirement: 'Weekly'
    },
    {
        tree_id: 8,
        tree_name: 'Dwarf Peach Tree',
        scientific_name: 'Prunus persica',
        tree_description: 'Compact tree that produces sweet and juicy peaches.',
        tree_image: 'https://res.cloudinary.com/dchzjr4bz/image/upload/v1690882083/dwarf_banana_tree_iqwuqy.jpg',
        tree_price: 36.99,
        fertilizer_name: 'Tree-tone',
        water_requirement: 'Weekly'
    },
    {
        tree_id: 9,
        tree_name: 'Dwarf Mango Tree',
        scientific_name: 'Mangifera indica',
        tree_description: 'A dwarf version of the tropical mango tree.',
        tree_image: 'https://res.cloudinary.com/dchzjr4bz/image/upload/v1690882083/dwarf_banana_tree_iqwuqy.jpg',
        tree_price: 48.99,
        fertilizer_name: 'Tropical-tone',
        water_requirement: 'Twice a week'
    },
    {
        tree_id: 10,
        tree_name: 'Dwarf Apricot Tree',
        scientific_name: 'Prunus armeniaca',
        tree_description: 'Compact tree with aromatic, juicy fruits.',
        tree_image: 'https://res.cloudinary.com/dchzjr4bz/image/upload/v1690882083/dwarf_banana_tree_iqwuqy.jpg',
        tree_price: 37.99,
        fertilizer_name: 'Tree-tone',
        water_requirement: 'Weekly'
    }
    ]);
  
};
