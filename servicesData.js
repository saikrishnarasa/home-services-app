const services = [
    {
      id: 1,
      title: "House Cleaning",
      provider: "Subbalaxmi",
      address: "1-48 Maruthi Nagar, Razam",
      image: "/images/housecleaning.jpg", // ✅ Absolute path
      Description:`<h4>House Cleaning Service – Just ₹300! 🏡✨</h4>

                <h4>Get your home cleaned professionally at an affordable price! For just ₹300, we offer:</h4>
                
                <h4>✅ Sweeping & Mopping – Clean and shiny floors</h4>
                <h4>✅ Dusting – Furniture, shelves, and surfaces</h4>
                <h4>✅ Cobweb Removal – No more hidden dust</h4>
                <h4>✅ Bathroom & Kitchen Cleaning – Fresh and hygienic</h4>
                
                <h4>✔️ Quick & Efficient ✔️ Trusted Cleaners ✔️ Best Price</h4>
                
                <h4>📅 Book Now! A clean home is just a step away! ✨</h4>
                </p>`
    },
    {
      id: 2,
      title: "Washing Clothes",
      provider: "Anusha",
      address: "7-92 Gandhi Nagar, Srikakulam",
      image: "/images/washingcloths.jpg",
      Description:`<h2>Description</h2>
            <h4>Clothes Washing Service – Just ₹300! 🧺✨</h4>
            <h4>Get your laundry done quickly and affordably for just ₹300! Our service includes:</h4>
            <h4>✅ Washing & Rinsing – Fresh and clean clothes</h4>
            <h4>✅ Stain Removal – Tough stains treated with care</h4>
            <h4>✅ Drying – Properly dried for freshness</h4>
            <h4><✅ Folding – Neatly arranged and ready to use</h4>
            <h4>✔️ Hygienic ✔️ Quick Service ✔️ Affordable Price</h4>
            <h4>📅 Book Now! Let us take care of your laundry! 🚿👕</h4>`
    },
    {
      id: 3,
      title: "House Repairing",
      provider: "Ramesh",
      address: "10-23 MG Road, Vizag",
      image: "/images/house-repairing.jpg",
      Description:`<h4>House Repairing Service – Just ₹300! 🏠🔧</h4>
            <h4>Get quick and reliable house repairs for just ₹300! Our service includes:</h4>
            <h4>✅ Minor Fixes – Doors, windows, and small repairs</h4>
            <h4>✅ Leak & Crack Repairs – Patching up walls and plumbing leaks</h4>
            <h4>✅ Electrical & Plumbing Checks – Basic troubleshooting</h4>
            <h4>✅ General Maintenance – Keep your home in top shape</h4>
            <h4>✔️ Affordable ✔️ Skilled Technicians ✔️ Fast & Reliable</h4>
            <h4>📅 Book Now! Let us handle your home repairs! 🔨🔩</h4>`
    },
    {
      id: 4,
      title: "Bathroom Cleaning",
      provider: "Krishna",
      address: "45-56 Krishna Nagar, Vizag",
      image: "/images/bathroomcleaning.jpg",
      Description:`<h2>Description</h2>
            <h4>Bathroom Cleaning Service – Just ₹300! 🚿✨</h4>
            <h4>Get your bathroom sparkling clean with our professional cleaning service for just ₹300!</h4>
            <h4>✅ Deep Cleaning – Tiles, floors, and walls</h4>
            <h4>✅ Stain & Limescale Removal – Say goodbye to hard water stains</h4>
            <h4>✅ Sanitization – Germ-free toilets, sinks, and showers</h4>
            <h4>✅ Odor Removal – Leaves your bathroom fresh and hygienic</h4>
            <h4>✔️ Affordable ✔️ Eco-friendly Products ✔️ Expert Cleaners</h4>
            <h4>📅 Book Now! For a fresh and hygienic bathroom! 🧼🚽</h4>`
    },
    {
      id: 5,
      title: "Electrical Work",
      provider: "Suresh",
      address: "8-12 Surya Colony, Hyderabad",
      image: "/images/electricalwork.jpeg",
      Description:`<h2>Description</h2>
            <h4>Electrical Work Service – ₹300 ⚡🔧</h4>
            <h4>Ensure the safety and functionality of your electrical systems for just ₹300! Our expert electricians offer:</h4>
            <h4>✅ Wiring & Rewiring – Secure and efficient installations</h4>
            <h4>✅ Socket & Switch Repair – Fixing faulty connections and ensuring safety</h4>
            <h4>✅ Electrical Appliance Installation – Setup for lights, fans, and other appliances</h4>
            <h4>✅ Circuit Testing & Troubleshooting – Quick resolution of electrical issues</h4>
            <h4>✅ Affordable | ⚡ Skilled Technicians | 🛠️ Reliable Service</h4>
            <h4>Book now for a safe and hassle-free electrical service!</h4>`
    },
    {
      id: 6,
      title: "Plumbing",
      provider: "Venkat",
      address: "24-78 Vijaya Nagar, Chennai",
      image: "/images/plumbing.jpg",
      Description:`<h2>Description</h2>
            <h4>Plumbing Service – ₹300 🚰🔧</h4>
            <h4>Get your plumbing issues fixed quickly and efficiently with our Plumbing Service for just ₹300! Whether it’s a leaky faucet or clogged pipes, we’ve got you covered. Our service includes:</h4>
            <h4>✅ Leak Repairs – Fixing leaks in pipes, faucets, and valves</h4>
            <h4>✅ Clog Removal – Clearing clogged drains and toilets</h4>
            <h4>✅ Pipe Installation & Repair – Installing or repairing water pipes for smooth flow</h4>
            <h4>✅ Affordable & Professional – Skilled plumbers ready to resolve your issues</h4>
            <h4>Book our service now for reliable, budget-friendly plumbing solutions!</h4>`
    },
    {
      id: 7,
      title: "Shifting Services",
      provider: "Ravi",
      address: "9-20 Lakshmi Nagar, Bangalore",
      image: "/images/shifting.jpg",
      Description:`<h2>Description</h2>
            <h4>Home Shifting Service –  🚚🏡</h4>
            <h4>Make your move stress-free with our efficient Home Shifting Service. We ensure your belongings are safely packed, transported, and unloaded with care. Our service includes:</h4>
            <h4>✅ Packing & Unpacking – Safe packing of fragile and valuable items</h4>
            <h4>✅ Loading & Unloading – Experienced team to handle heavy furniture and boxes</h4>
            <h4>✅ Transportation – Reliable vehicles for smooth and timely delivery</h4>
            <h4>✅ Affordable & Efficient – Get your home shifted without the hassle</h4>
            <h4>Book now for a smooth and budget-friendly moving experience!</h4>`
    },
  ];
  
  export default services;
  