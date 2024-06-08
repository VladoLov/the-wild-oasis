import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  //-- for editing
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("Cabin successfully updated");
      //   queryClient.setQueriesData(["user"], user);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      // reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
