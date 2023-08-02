exports.seed = function(knex) {
  return knex('claypot').del()
    .then(function () {
      return knex('claypot').insert([
        {
          claypot_name: 'Haven Planter',
          claypot_price: 29.99,
          claypot_width: 12.5,
          claypot_height: 15.0,
          claypot_length: 10.0,
          claypot_description: 'This is a beautiful clay pot for plants.',
          claypot_waterlevel: 50,
          claypot_image: 'https://res.cloudinary.com/dchzjr4bz/image/upload/v1690968621/pot1_gkvkfb.webp',
          claypot_color: 'Brown', // Add claypot_color value
        },
        {
          claypot_name: 'Modern Plant Container',
          claypot_price: 19.99,
          claypot_width: 10.0,
          claypot_height: 12.0,
          claypot_length: 8.0,
          claypot_description: 'A small clay pot perfect for indoor plants.',
          claypot_waterlevel: 30,
          claypot_image: 'https://res.cloudinary.com/dchzjr4bz/image/upload/v1690969074/Sajani_Pot_Planter_ap1e2g.webp',
          claypot_color: 'Brown', // Add claypot_color value
        },
        {
          claypot_name: 'Hand-made Clay pot',
          claypot_price: 39.99,
          claypot_width: 15.0,
          claypot_height: 18.0,
          claypot_length: 12.0,
          claypot_description: 'Large clay pot suitable for outdoor use.',
          claypot_waterlevel: 70,
          claypot_image: 'https://res.cloudinary.com/dchzjr4bz/image/upload/v1690969584/Halstein_Handmade_Pot_Planter_zpt7lb.webp',
          claypot_color: 'off white', // Add claypot_color value
        },
      ]);
    });
};
