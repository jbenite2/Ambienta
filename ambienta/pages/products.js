export default function Products() {
    return (
        <div id="sectionOne" className="bg-white min-h-screen flex flex-col items-start">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a href="#" className="group">
              <div className="aspect-w-1 w-[300px] overflow-hidden rounded-lg bg-gray-200">
                <img
                  src="/products/droplet-delight.jpg"
                  alt="Droplet style ceiling lamp."
                  className="h-[450px] w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Droplet Delight</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$200</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-w-1 w-[300px] overflow-hidden rounded-lg bg-gray-200">
                <img
                  src="/products/rooted-elegance.jpg"
                  alt="Nature roots pattern"
                  className="h-[450px] w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Rooted Elegance</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$450</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-w-1 w-[300px] overflow-hidden rounded-lg bg-gray-200">
                <img
                  src="/products/spring-foliage.jpg"
                  alt="Spring foliage pattern"
                  className="h-[450px] w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Spring Foliage</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$200</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-w-1 w-[300px] overflow-hidden rounded-lg bg-gray-200">
                <img
                  src="/products/deer.png"
                  alt="Deer pattern"
                  className="h-[450px] w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Deer Roots</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$200</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-w-1 w-[300px] overflow-hidden rounded-lg bg-gray-200">
                <img
                  src="/products/bamboo_tripod.png"
                  alt="Bamboo tripod pattern"
                  className="h-[450px] w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Bamboo</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$200</p>
            </a>
          </div>
        </div>
      </div>
    );
  }