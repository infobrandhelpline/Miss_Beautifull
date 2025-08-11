export default function TestImages() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Image Test Page</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">Hair Cut</h3>
          <img 
            src="/service-list/Hair Services/Hair Cut.png" 
            alt="Hair Cut"
            className="w-full h-32 object-cover rounded"
            onError={(e) => {
              console.error('Image failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
            onLoad={() => console.log('Image loaded successfully:', '/service-list/Hair Services/Hair Cut.png')}
          />
        </div>
        
        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">Hair Wash</h3>
          <img 
            src="/service-list/Hair Services/Hair Wash.png" 
            alt="Hair Wash"
            className="w-full h-32 object-cover rounded"
            onError={(e) => {
              console.error('Image failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
            onLoad={() => console.log('Image loaded successfully:', '/service-list/Hair Services/Hair Wash.png')}
          />
        </div>
        
        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">Fruit Facial</h3>
          <img 
            src="/service-list/Fruit  Gold  Diamond facial.png" 
            alt="Fruit Facial"
            className="w-full h-32 object-cover rounded"
            onError={(e) => {
              console.error('Image failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
            onLoad={() => console.log('Image loaded successfully:', '/service-list/Fruit  Gold  Diamond facial.png')}
          />
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Image Paths Test</h2>
        <ul className="space-y-2">
          <li>✅ /service-list/Hair Services/Hair Cut.png</li>
          <li>✅ /service-list/Hair Services/Hair Wash.png</li>
          <li>✅ /service-list/Hair Services/Hair Spa.png</li>
          <li>✅ /service-list/Fruit  Gold  Diamond facial.png</li>
          <li>✅ /service-list/Hydra Facial.png</li>
          <li>✅ /service-list/Skin Polishing.png</li>
          <li>✅ /service-list/Anti-Aging Treatment.png</li>
        </ul>
      </div>
    </div>
  );
} 