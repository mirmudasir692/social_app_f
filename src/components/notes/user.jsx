import { baseUrl } from "../../conf/conf";

const User = ({user}) => {
  return (
    <div class="text-sm leading-6">
      <figure class="relative flex flex-col-reverse bg-slate-100 rounded-lg p-0 dark:bg-slate-800 dark:highlight-white/5">
        <blockquote class="mt-2 text-slate-700 dark:text-slate-300">
        </blockquote>
        <figcaption class="flex items-center space-x-4">
          <img
            src={`${baseUrl}${user.profile_pic}`}
            alt=""
            class="flex-none w-14 h-14 rounded-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div class="flex-auto">
            <div class="text-base text-slate-600 font-semibold dark:text-slate-200">
               {user.username}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default User;
