const Paginator = ({ setPage, has_next, has_prev }) => {
  const load_next = () => {
    setPage((preValue) => {
      const newValue = preValue + 1;
      console.log("page num in paginator", newValue);
      return newValue;
    });
  };
  const load_prev = () => {
    setPage((preValue) => {
      const newValue = preValue - 1;
      console.log("page num in paginator", newValue);
      return newValue;
    });
  };

  return (
    <div>
      <div class="flex flex-col items-center">
        <div class="inline-flex mt-2 xs:mt-0"></div>
      </div>
      <div class="flex flex-col items-center">
        <div class="inline-flex mt-2 xs:mt-0">
          {/* <button
            onClick={has_prev && load_prev}
            class={`flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              has_prev ? "cursor-pointer" : "cursor-not-allowed"
            }`}
          >
            <svg
              class="w-3.5 h-3.5 me-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Prev
          </button> */}
          <button
            onClick={has_next && load_next}
            class={`flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              has_next ? "cursor-pointer" : "cursor-not-allowed"
            }`}
          >
            Next
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paginator;
