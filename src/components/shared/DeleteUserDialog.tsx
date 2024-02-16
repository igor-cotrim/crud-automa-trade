"use client";

import { useState } from "react";

import { api } from "@/trpc/react";
import {
  AlertDialog as UiAlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

type Props = {
  userId: number;
  userName: string;
};

export function DeleteUserDialog({ userName, userId }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const deleteUser = api.user.delete.useMutation({
    onSuccess: () => {
      router.refresh();
      setOpen(false);
    },
  });

  return (
    <UiAlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
        Deletar usuário
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deletar usuário</AlertDialogTitle>
          <AlertDialogDescription>{`Deseja mesmo deletar o usuário com o ID: ${userId} e com NOME: ${userName}`}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            disabled={deleteUser.isLoading}
            onClick={() => deleteUser.mutate({ id: userId })}
          >
            {deleteUser.isLoading ? "Deletando..." : "Deletar"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </UiAlertDialog>
  );
}
