import { createPost } from "../../../../../api/createPost/createPost.service";
import { createPostProp } from "../../../../../shared/types/createPost";
import { FormDescription } from "../components/form";

function Home() {
  async function handleSubmit(data: createPostProp) {
    await createPost(data);
  }

  return (
    <div className="grid grid-cols-3  gap-5 p-8">
      <div className="bg-red-500 col-span-2 rounded-lg">
        <img src="" alt="" />
      </div>
      <div className="col-span-1 col-start-3">
        <FormDescription handleOnSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export { Home };
