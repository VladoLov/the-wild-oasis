import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  // eslint-disable-next-line no-unused-vars
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: (newCabin) => createEditCabin(newCabin),
    onSuccess: () => {
      toast.success("New cabin successfully crated");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      //   reset();
      //now we can't call this function reset
    },
    onError: (err) => toast.error(err.message),
  });
  return { createCabin, isCreating };
}
