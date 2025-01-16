"use client";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
      <div className="bg-white p-12 rounded-lg shadow-md max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-6">Document Title</h1>
        <p className="text-lg leading-8 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
          facilisis neque. Cras auctor eros nec felis efficitur, sed ullamcorper
          neque bibendum. Integer nec ex non lectus aliquet ultricies a et leo.
          Suspendisse potenti.
        </p>
        <p className="text-lg leading-8 text-gray-800 mt-4">
          Curabitur non bibendum purus. Nam faucibus feugiat nisl, vel placerat
          magna consequat nec. Donec convallis eros in odio vehicula, at
          vehicula lacus pretium. Ut faucibus augue magna, non fermentum justo
          hendrerit sed. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas.
        </p>
        <p className="text-lg leading-8 text-gray-800 mt-4">
          Donec ullamcorper augue quis nunc rhoncus, vitae vestibulum quam
          fermentum. Etiam vestibulum tortor non metus suscipit, quis pharetra
          tortor facilisis. Maecenas eget fringilla ligula. In aliquet, sapien
          id laoreet tempor, magna metus vulputate arcu, non sagittis nisi metus
          non nunc.
        </p>
        <p className="text-lg leading-8 text-gray-800 mt-4">
          In eu urna ex. Suspendisse scelerisque lectus ac orci fermentum, vel
          sagittis justo tincidunt. Quisque id nulla ac libero volutpat luctus
          id nec risus. Nulla facilisi. Nam ut orci vitae elit tempor viverra.
        </p>
        <div className="text-center mt-8">
          <button
            className="py-2 px-6 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            onClick={() => window.print()}
          >
            Print Page
          </button>
        </div>
      </div>
    </div>
  );
}
