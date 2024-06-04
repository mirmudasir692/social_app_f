


const UserBlogs = () => {
  return (
    <div class="flex flex-wrap -mx-px md:-mx-3">
      <div class="w-1/3 p-px md:px-3">
        <a href="#">
          <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
            <img
              class="w-full h-full absolute left-0 top-0 object-cover"
              src="images/demo.png"
              alt="image"
            />

            <i class="fas fa-square absolute right-0 top-0 m-1"></i>
            <div
              class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                  left-0 top-0"
            >
              <div
                class="flex justify-center items-center 
                                      space-x-4 h-full"
              >
                <span class="p-2">
                  <i class="fas fa-heart"></i>
                  412K
                </span>

                <span class="p-2">
                  <i class="fas fa-comment"></i>
                  2,909
                </span>
              </div>
            </div>
          </article>
        </a>
      </div>

      <div class="w-1/3 p-px md:px-3">
        <a href="#">
          <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
            <img
              class="w-full h-full absolute left-0 top-0 object-cover"
              src="images/demo1.png"
              alt="image"
            />

            <div
              class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                  left-0 top-0 hidden"
            >
              <div
                class="flex justify-center items-center 
                                      space-x-4 h-full"
              >
                <span class="p-2">
                  <i class="fas fa-heart"></i>
                  412K
                </span>

                <span class="p-2">
                  <i class="fas fa-comment"></i>
                  1,993
                </span>
              </div>
            </div>
          </article>
        </a>
      </div>

      <div class="w-1/3 p-px md:px-3">
        <a href="#">
          <article class="post bg-gray-100 text-white relative pb-full  md:mb-6">
            <img
              class="w-full h-full absolute left-0 top-0 object-cover"
              src="images/demo2.png"
              alt="image"
            />
            <div
              class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                  left-0 top-0 hidden"
            >
              <div
                class="flex justify-center items-center 
                                      space-x-4 h-full"
              >
                <span class="p-2">
                  <i class="fas fa-heart"></i>
                  112K
                </span>

                <span class="p-2">
                  <i class="fas fa-comment"></i>
                  2,090
                </span>
              </div>
            </div>
          </article>
        </a>
      </div>

      <div class="w-1/3 p-px md:px-3">
        <a href="#">
          <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
            <img
              class="w-full h-full absolute left-0 top-0 object-cover"
              src="images/demo3.jpg"
              alt="image"
            />

            <i class="fas fa-video absolute right-0 top-0 m-1"></i>

            <div
              class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                  left-0 top-0 hidden"
            >
              <div
                class="flex justify-center items-center 
                                      space-x-4 h-full"
              >
                <span class="p-2">
                  <i class="fas fa-heart"></i>
                  841K
                </span>

                <span class="p-2">
                  <i class="fas fa-comment"></i>
                  909
                </span>
              </div>
            </div>
          </article>
        </a>
      </div>

      <div class="w-1/3 p-px md:px-3">
        <a href="#">
          <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
            <img
              class="w-full h-full absolute left-0 top-0 object-cover"
              src="images/demo4.jpg"
              alt="image"
            />
            <div
              class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                  left-0 top-0 hidden"
            >
              <div
                class="flex justify-center items-center 
                                      space-x-4 h-full"
              >
                <span class="p-2">
                  <i class="fas fa-heart"></i>
                  120K
                </span>

                <span class="p-2">
                  <i class="fas fa-comment"></i>
                  3,909
                </span>
              </div>
            </div>
          </article>
        </a>
      </div>

      <div class="w-1/3 p-px md:px-3">
        <a href="#">
          <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
            <img
              class="w-full h-full absolute left-0 top-0 object-cover"
              src="images/demo5.webp"
              alt="image"
            />
            <div
              class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                  left-0 top-0 hidden"
            >
              <div
                class="flex justify-center items-center 
                                      space-x-4 h-full"
              >
                <span class="p-2">
                  <i class="fas fa-heart"></i>
                  160K
                </span>

                <span class="p-2">
                  <i class="fas fa-comment"></i>
                  5,557
                </span>
              </div>
            </div>
          </article>
        </a>
      </div>
    </div>
  );
};

export default UserBlogs;
