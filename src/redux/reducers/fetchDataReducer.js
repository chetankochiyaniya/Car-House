import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  EDIT_CAR_MODEL,
  ADD_CAR
} from '../constant'

const initialState = {
  data: [
    {
      car_id: '111111',
      carName: 'Audi R8',
      price: {
        originalPrice: 1900,
        discountedPrice: 1750
      },
      description:
        'The Audi R8 is a high-performance sports car that combines exhilarating performance with cutting-edge technology.',
      images: [
        'https://cdn.pixabay.com/photo/2019/12/26/20/50/audi-r8-4721217_1280.jpg',
        'https://audimediacenter-a.akamaihd.net/system/production/media/14036/images/ac149fea35a3891fe3d7f72023bf8bf619bf3ebe/R8GT100015_full.jpg?1582032134',
        'https://retaildesignblog.net/wp-content/uploads/2014/11/AUDI-R8-limited-edition-debuts-at-Los-Angeles-auto-show.jpg'
      ],
      tabOne: [
        {
          label: 'Condition',
          value: 'new'
        },
        {
          label: 'Type',
          value: 'sports'
        },
        {
          label: 'Make',
          value: 'Audi'
        },
        {
          label: 'Max Seating',
          value: 2
        },
        {
          label: 'Year',
          value: 2023
        },
        {
          label: 'Transmission Type',
          value: 'Automatic'
        },
        {
          label: 'Fuel Type',
          value: 'Diesel'
        },
        {
          label: 'Mileage',
          value: 4.3
        }
      ],
      tabTwo: [
        'Aluminum and Carbon Fiber Body',
        'LED Headlights',
        '19-inch Alloy Wheels',
        'Leather and Alcantara Interior',
        'Dual-zone Climate Control',
        'Virtual Cockpit',
        'Bang & Olufsen Sound System',
        'Front and Rear Parking Sensors',
        'Rearview Camera',
        'Ceramic Brakes',
        'Electronic Stability Control',
        'Airbags',
        'Anti-lock Braking System'
      ],
      tabThree: [
        {
          label: 'Length',
          value: '4426 mm'
        },
        {
          label: 'Width',
          value: '1940 mm'
        },
        {
          label: 'Height',
          value: '1240 mm'
        },
        {
          label: 'Wheelbase',
          value: '2650 mm'
        },
        {
          label: 'Curb Weight',
          value: '1615 kg'
        },
        {
          label: 'Trunk Capacity',
          value: '112 liters'
        }
      ],
      tabFour: [
        { label: 'Name', value: 'Oliver Smith' },
        { label: 'Phone', value: '+1 555-123-4567' },
        { label: 'Mobile phone', value: '+1 987-654-3210' },
        { label: 'Email', value: 'oliver@example.com' }
      ]
    },
    {
      car_id: '222222',
      carName: 'Jaguar F-Type',
      price: {
        originalPrice: 1500,
        discountedPrice: 1350
      },
      description:
        'The Jaguar F-Type is a stunning sports car that delivers a thrilling driving experience with its powerful performance and elegant design.',
      images: [
        'https://cdn.wallpapersafari.com/26/75/KnWXZE.jpg',
        'https://swall.teahub.io/photos/small/203-2037982_f-type-400-sport-jaguar.jpg'
      ],
      tabOne: [
        {
          label: 'Condition',
          value: 'new'
        },
        {
          label: 'Type',
          value: 'sports'
        },
        {
          label: 'Make',
          value: 'Jaguar'
        },
        {
          label: 'Max Seating',
          value: 2
        },
        {
          label: 'Year',
          value: 2023
        },
        {
          label: 'Transmission Type',
          value: 'Automatic'
        },
        {
          label: 'Fuel Type',
          value: 'Petrol'
        },
        {
          label: 'Mileage',
          value: 6.2
        }
      ],
      tabTwo: [
        'Aluminum Body',
        'LED Headlights',
        '20-inch Alloy Wheels',
        'Leather Interior',
        'Dual-zone Climate Control',
        'Navigation System',
        'Meridian Sound System',
        'Front and Rear Parking Sensors',
        'Rearview Camera',
        'Performance Brakes',
        'Electronic Stability Control',
        'Airbags',
        'Anti-lock Braking System'
      ],
      tabThree: [
        {
          label: 'Length',
          value: '4482 mm'
        },
        {
          label: 'Width',
          value: '1923 mm'
        },
        {
          label: 'Height',
          value: '1311 mm'
        },
        {
          label: 'Wheelbase',
          value: '2622 mm'
        },
        {
          label: 'Curb Weight',
          value: '1585-1715 kg'
        },
        {
          label: 'Trunk Capacity',
          value: '310 liters'
        }
      ],
      tabFour: [
        { label: 'Name', value: 'Sophia Anderson' },
        { label: 'Phone', value: '+1 555-234-5678' },
        { label: 'Mobile phone', value: '+1 987-654-3210' },
        { label: 'Email', value: 'sophia@example.com' }
      ]
    },
    {
      car_id: '333333',
      carName: 'Tesla Model S',
      price: {
        originalPrice: 1800,
        discountedPrice: 1650
      },
      description:
        'The Tesla Model S is an all-electric luxury sedan that sets new standards for performance, range, and technology.',
      images: [
        'https://wallpapercave.com/wp/wp4684443.jpg',
        'https://w0.peakpx.com/wallpaper/120/834/HD-wallpaper-tesla-model-s-by-novitec-tesla-model-s-tesla-novitec-cars-2018-cars.jpg'
      ],
      tabOne: [
        {
          label: 'Condition',
          value: 'new'
        },
        {
          label: 'Type',
          value: 'sedan'
        },
        {
          label: 'Make',
          value: 'Tesla'
        },
        {
          label: 'Max Seating',
          value: 4
        },
        {
          label: 'Year',
          value: 2023
        },
        {
          label: 'Transmission Type',
          value: 'Automatic'
        },
        {
          label: 'Fuel Type',
          value: 'Electric'
        },
        {
          label: 'Mileage',
          value: 10.3
        }
      ],
      tabTwo: [
        'Aluminum Body',
        'LED Headlights',
        '19-inch Alloy Wheels',
        'Premium Interior',
        'Dual-zone Climate Control',
        '17-inch Touchscreen Display',
        'Premium Audio System',
        'Autopilot',
        'Front and Rear Parking Sensors',
        'Rearview Camera',
        'Regenerative Braking',
        'Airbags',
        'Electronic Stability Control'
      ],
      tabThree: [
        {
          label: 'Length',
          value: '4970 mm'
        },
        {
          label: 'Width',
          value: '1964 mm'
        },
        {
          label: 'Height',
          value: '1445 mm'
        },
        {
          label: 'Wheelbase',
          value: '2960 mm'
        },
        {
          label: 'Curb Weight',
          value: '1999-2205 kg'
        },
        {
          label: 'Trunk Capacity',
          value: '804 liters'
        }
      ],
      tabFour: [
        { label: 'Name', value: 'Michael Johnson' },
        { label: 'Phone', value: '+1 555-789-1234' },
        { label: 'Mobile phone', value: '+1 987-654-3210' },
        { label: 'Email', value: 'michael@example.com' }
      ]
    },
    {
      car_id: '444444',
      carName: 'Bugatti Chiron',
      price: {
        originalPrice: 1200,
        discountedPrice: 1000
      },
      description: 'The Bugatti Chiron is a masterpiece of engineering and design.',
      images: [
        'https://c4.wallpaperflare.com/wallpaper/441/937/183/bugatti-chiron-4k-image-of-best-wallpaper-preview.jpg',
        'https://www.hdcarwallpapers.com/walls/2018_bugatti_chiron_yellow_and_black_4k-HD.jpg',
        'https://www.hdcarwallpapers.com/walls/2018_bugatti_chiron_yellow_and_black_4k_3-HD.jpg'
      ],
      tabOne: [
        {
          label: 'Condition',
          value: 'new'
        },
        {
          label: 'Type',
          value: 'sports'
        },
        {
          label: 'Make',
          value: 'Bugatti'
        },
        {
          label: 'Max Seating',
          value: 5
        },
        {
          label: 'Year',
          value: 2023
        },
        {
          label: 'Transmission Type',
          value: 'Automatic'
        },
        {
          label: 'Fuel Type',
          value: 'Electric'
        },
        {
          label: 'Mileage',
          value: 10.3
        }
      ],
      tabTwo: [
        'Carbon Fiber Body',
        'LED Headlights',
        'Active Rear Wing',
        '20-inch Alloy Wheels',
        'Leather Interior',
        'Dual-zone Climate Control',
        'Navigation System',
        'Premium Sound System',
        'Front and Rear Parking Sensors',
        'Rearview Camera',
        'Carbon Ceramic Brakes',
        'Electronic Stability Control',
        'Airbags',
        'Anti-lock Braking System'
      ],
      tabThree: [
        {
          label: 'Length',
          value: '4544 mm'
        },
        {
          label: 'Width',
          value: '2038 mm'
        },
        {
          label: 'Height',
          value: '1212 mm'
        },
        {
          label: 'Wheelbase',
          value: '2711 mm'
        },
        {
          label: 'Curb Weight',
          value: '1995 kg'
        },
        {
          label: 'Trunk Capacity',
          value: '44 liters'
        }
      ],
      tabFour: [
        { label: 'Name', value: 'Chetan Kochiyaniy' },
        { label: 'Phone', value: '+91 635-307-4971' },
        { label: 'Mobile phone', value: '+91 123-456-7890' },
        { label: 'Email', value: 'chetan@carhouse.com' }
      ]
    },
    {
      car_id: '555555',
      carName: 'Ferrari LaFerrari',
      price: {
        originalPrice: 3000,
        discountedPrice: 2800
      },
      description: 'The Ferrari LaFerrari is a high-performance hybrid sports car.',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg/640px-LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/c/c0/Ferrari_LaFerrari_rear.jpg'
      ],
      tabOne: [
        {
          label: 'Condition',
          value: 'new'
        },
        {
          label: 'Type',
          value: 'sports'
        },
        {
          label: 'Make',
          value: 'Ferrari'
        },
        {
          label: 'Max Seating',
          value: 2
        },
        {
          label: 'Year',
          value: 2023
        },
        {
          label: 'Transmission Type',
          value: 'Automatic'
        },
        {
          label: 'Fuel Type',
          value: 'Petrol'
        },
        {
          label: 'Mileage',
          value: 6.2
        }
      ],
      tabTwo: [
        'Carbon Fiber Body',
        'LED Headlights',
        'Active Rear Wing',
        '19-inch Alloy Wheels',
        'Leather Interior',
        'Dual-zone Climate Control',
        'Navigation System',
        'Premium Sound System',
        'Front and Rear Parking Sensors',
        'Rearview Camera',
        'Carbon Ceramic Brakes',
        'Electronic Stability Control',
        'Airbags',
        'Anti-lock Braking System'
      ],
      tabThree: [
        {
          label: 'Length',
          value: '4702 mm'
        },
        {
          label: 'Width',
          value: '1992 mm'
        },
        {
          label: 'Height',
          value: '1116 mm'
        },
        {
          label: 'Wheelbase',
          value: '2650 mm'
        },
        {
          label: 'Curb Weight',
          value: '1255 kg'
        },
        {
          label: 'Trunk Capacity',
          value: '28 liters'
        }
      ],
      tabFour: [
        { label: 'Name', value: 'John Doe' },
        { label: 'Phone', value: '+1 123-456-7890' },
        { label: 'Mobile phone', value: '+1 987-654-3210' },
        { label: 'Email', value: 'john@example.com' }
      ]
    },
    {
      car_id: '666666',
      carName: 'Lamborghini Aventador',
      price: {
        originalPrice: 2800,
        discountedPrice: 2600
      },
      description: 'The Lamborghini Aventador is a powerful and aggressive supercar.',
      images: [
        'https://pictures.dealer.com/l/lamborghinidallas/1694/8f4cdc2a434e958e4466b52f0781a612x.jpg?impolicy=downsize&w=568',
        'https://images.unsplash.com/photo-1617650728468-8581e439c864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhbWJvcmdoaW5pJTIwYXZlbnRhZG9yfGVufDB8fDB8fHww&w=1000&q=80'
      ],
      tabOne: [
        {
          label: 'Condition',
          value: 'new'
        },
        {
          label: 'Type',
          value: 'sports'
        },
        {
          label: 'Make',
          value: 'Lamborghini'
        },
        {
          label: 'Max Seating',
          value: 2
        },
        {
          label: 'Year',
          value: 2023
        },
        {
          label: 'Transmission Type',
          value: 'Automatic'
        },
        {
          label: 'Fuel Type',
          value: 'Diesel'
        },
        {
          label: 'Mileage',
          value: 5.3
        }
      ],
      tabTwo: [
        'Carbon Fiber Body',
        'LED Headlights',
        'Active Rear Wing',
        '20-inch Alloy Wheels',
        'Leather Interior',
        'Dual-zone Climate Control',
        'Navigation System',
        'Premium Sound System',
        'Front and Rear Parking Sensors',
        'Rearview Camera',
        'Carbon Ceramic Brakes',
        'Electronic Stability Control',
        'Airbags',
        'Anti-lock Braking System'
      ],
      tabThree: [
        {
          label: 'Length',
          value: '4841 mm'
        },
        {
          label: 'Width',
          value: '2030 mm'
        },
        {
          label: 'Height',
          value: '1136 mm'
        },
        {
          label: 'Wheelbase',
          value: '2700 mm'
        },
        {
          label: 'Curb Weight',
          value: '1575 kg'
        },
        {
          label: 'Trunk Capacity',
          value: '100 liters'
        }
      ],
      tabFour: [
        { label: 'Name', value: 'Jane Smith' },
        { label: 'Phone', value: '+1 555-123-4567' },
        { label: 'Mobile phone', value: '+1 987-654-3210' },
        { label: 'Email', value: 'jane@example.com' }
      ]
    },
    {
      car_id: '7777',
      carName: 'Porsche 911',
      price: {
        originalPrice: 1500,
        discountedPrice: 1400
      },
      description: 'The Porsche 911 is an iconic sports car known for its performance and design.',
      images: [
        'https://s1.1zoom.ru/big0/106/Porsche_911_Turbo_S_2020_992_Coupe_Metallic_Silver_582113_1365x1024.jpg',
        'https://www.hdcarwallpapers.com/walls/porsche_911_turbo_s_2020_5k_2-HD.jpg'
      ],
      tabOne: [
        {
          label: 'Condition',
          value: 'new'
        },
        {
          label: 'Type',
          value: 'sports'
        },
        {
          label: 'Make',
          value: 'Porsche'
        },
        {
          label: 'Max Seating',
          value: 2
        },
        {
          label: 'Year',
          value: 2023
        },
        {
          label: 'Transmission Type',
          value: 'Automatic'
        },
        {
          label: 'Fuel Type',
          value: 'Diesel'
        },
        {
          label: 'Mileage',
          value: 8.3
        }
      ],
      tabTwo: [
        'Aluminum Body',
        'LED Headlights',
        'Rear Spoiler',
        '19-inch Alloy Wheels',
        'Leather Interior',
        'Dual-zone Climate Control',
        'Navigation System',
        'Premium Sound System',
        'Front and Rear Parking Sensors',
        'Rearview Camera',
        'Anti-lock Braking System',
        'Airbags'
      ],
      tabThree: [
        {
          label: 'Length',
          value: '4499 mm'
        },
        {
          label: 'Width',
          value: '1852 mm'
        },
        {
          label: 'Height',
          value: '1300 mm'
        },
        {
          label: 'Wheelbase',
          value: '2450 mm'
        },
        {
          label: 'Curb Weight',
          value: '1450 kg'
        },
        {
          label: 'Trunk Capacity',
          value: '132 liters'
        }
      ],
      tabFour: [
        { label: 'Name', value: 'John Smith' },
        { label: 'Phone', value: '+1 555-123-4567' },
        { label: 'Mobile phone', value: '+1 987-654-3210' },
        { label: 'Email', value: 'john@example.com' }
      ]
    },
    {
      car_id: '888888',
      carName: 'Rolls-Royce Phantom',
      price: {
        originalPrice: 3500,
        discountedPrice: 3200
      },
      description:
        'The Rolls-Royce Phantom is the epitome of luxury and refinement, offering a serene driving experience.',
      images: [
        'https://c4.wallpaperflare.com/wallpaper/270/428/1024/rolls-royce-ghost-dark-black-wallpaper-preview.jpg',
        'https://e1.pxfuel.com/desktop-wallpaper/871/287/desktop-wallpaper-rolls-royce-ghost-2019-rolls-royce-phantom-interior.jpg',
        'https://wallpapers.com/images/hd/rolls-royce-phantom-black-797mqwns0nhdnlup.jpg'
      ],
      tabOne: [
        {
          label: 'Condition',
          value: 'new'
        },
        {
          label: 'Type',
          value: 'sedan'
        },
        {
          label: 'Make',
          value: 'Rolls-Royce'
        },
        {
          label: 'Max Seating',
          value: 5
        },
        {
          label: 'Year',
          value: 2022
        },
        {
          label: 'Transmission Type',
          value: 'Automatic'
        },
        {
          label: 'Fuel Type',
          value: 'Diesel'
        },
        {
          label: 'Mileage',
          value: 3.3
        }
      ],
      tabTwo: [
        'Aluminum Body',
        'LED Headlights',
        'Chrome Grille',
        '20-inch Alloy Wheels',
        'Leather and Wood Interior',
        'Four-zone Climate Control',
        'Navigation System',
        'Premium Sound System',
        'Front and Rear Parking Sensors',
        '360-degree Camera System',
        'Electronic Stability Control',
        'Airbags',
        'Anti-lock Braking System'
      ],
      tabThree: [
        {
          label: 'Length',
          value: '6092 mm'
        },
        {
          label: 'Width',
          value: '1990 mm'
        },
        {
          label: 'Height',
          value: '1656 mm'
        },
        {
          label: 'Wheelbase',
          value: '3772 mm'
        },
        {
          label: 'Curb Weight',
          value: '2670 kg'
        },
        {
          label: 'Trunk Capacity',
          value: '548 liters'
        }
      ],
      tabFour: [
        { label: 'Name', value: 'Sophia Anderson' },
        { label: 'Phone', value: '+1 555-345-6789' },
        { label: 'Mobile phone', value: '+1 123-456-7890' },
        { label: 'Email', value: 'sophia@example.com' }
      ]
    },
    {
      car_id: '999999',
      carName: 'Mercedes-Benz S-Class',
      price: {
        originalPrice: 1800,
        discountedPrice: 1650
      },
      description:
        'The Mercedes-Benz S-Class is a flagship luxury sedan that sets new standards in comfort and technology.',
      images: [
        'https://images.hindustantimes.com/auto/img/2021/07/30/1600x900/2022-mercedes-s680-guard_1627633946225_1627633954029.jpg',
        'https://imgcdnblog.carmudi.com.ph/wp-content/uploads/2021/08/06074434/mercedes-benz-s680-guard-3.jpg'
      ],
      tabOne: [
        {
          label: 'Condition',
          value: 'used'
        },
        {
          label: 'Type',
          value: 'sedan'
        },
        {
          label: 'Make',
          value: 'Mercedes-Benz'
        },
        {
          label: 'Max Seating',
          value: 7
        },
        {
          label: 'Year',
          value: 2021
        },
        {
          label: 'Transmission Type',
          value: 'Automatic'
        },
        {
          label: 'Fuel Type',
          value: 'Diesel'
        },
        {
          label: 'Mileage',
          value: 5.3
        }
      ],
      tabTwo: [
        'Aluminum Body',
        'LED Headlights',
        'Panoramic Sunroof',
        '18-inch Alloy Wheels',
        'Leather Interior',
        'Four-zone Climate Control',
        'MBUX Infotainment System',
        'Burmester Sound System',
        'Front and Rear Parking Sensors',
        '360-degree Camera System',
        'Adaptive Cruise Control',
        'Airbags',
        'Anti-lock Braking System'
      ],
      tabThree: [
        {
          label: 'Length',
          value: '5255 mm'
        },
        {
          label: 'Width',
          value: '1954 mm'
        },
        {
          label: 'Height',
          value: '1496 mm'
        },
        {
          label: 'Wheelbase',
          value: '3216 mm'
        },
        {
          label: 'Curb Weight',
          value: '1950-2300 kg'
        },
        {
          label: 'Trunk Capacity',
          value: '510 liters'
        }
      ],
      tabFour: [
        { label: 'Name', value: 'Daniel Thompson' },
        { label: 'Phone', value: '+1 555-876-5432' },
        { label: 'Mobile phone', value: '+1 987-654-3210' },
        { label: 'Email', value: 'daniel@example.com' }
      ]
    }
  ],
  isLoading: false,
  error: null,
  carEdit: false
}

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      }
    case FETCH_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.payload
      }
    case EDIT_CAR_MODEL:
      return {
        ...state,
        carEdit: action.payload
      }
    case ADD_CAR:
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    default:
      return state
  }
}

export default fetchDataReducer
