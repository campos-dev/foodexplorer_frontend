import { useState } from "react";
import { api } from "../services/api";

export function useAvatar() {
  const [avatar, setAvatar] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarFileName, setAvatarFileName] = useState("");

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    if (file) {
      const imagePreview = URL.createObjectURL(file);
      setAvatar(imagePreview);
      setAvatarFile(file);
      setAvatarFileName(file.name);
    }
  }

  async function handleUpdateAvatar(id) {
    if (avatarFile) {
      const fileUploadForm = new FormData();
      fileUploadForm.append("avatar", avatarFile);
      await api.patch(`/dishes/avatar/${id}`, fileUploadForm, {
        withCredentials: true,
      });
    }
  }

  return {
    avatar,
    avatarFile,
    avatarFileName,
    handleChangeAvatar,
    handleUpdateAvatar,
  };
}
