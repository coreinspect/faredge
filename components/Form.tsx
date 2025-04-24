"use client";
const Form = () => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <div className="w-full max-w-3xl mx-auto">
      <form
        className="bg-gradient-to-r from-indigo-50 to-blue-50 shadow-lg rounded-xl p-8 border border-blue-100"
        onSubmit={handleSubmit}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          What do you need for your trip?
        </h3>

        <div className="flex flex-wrap items-end gap-5 justify-center">
          <div className="mb-2">
            <label
              htmlFor="quantity"
              className="block text-indigo-700 text-sm font-medium mb-2"
            >
              Quantity
            </label>
            <select className="bg-white border border-indigo-200 rounded-md py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 shadow-sm">
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-grow mb-2 mx-2">
            <label
              htmlFor="item"
              className="block text-indigo-700 text-sm font-medium mb-2"
            >
              Item
            </label>
            <input
              type="text"
              className="bg-white border border-indigo-200 rounded-md w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 shadow-sm"
            />
          </div>

          <div className="mb-2 self-end">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 outline-none"
            >
              Add to list
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
