import React, { useState } from "react";
import { Button, IconButton, Input } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

interface FileUploaderProps {
  onFileUpload: () => void;
}

export function FileUploadButton({ onFileUpload }: FileUploaderProps) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
      setSelectedFile(null);
    } else {
      alert("Выберите файл для загрузки");
    }
  };

  return (
    <div>
      <Input
        type="file"
        inputProps={{ accept: "image/*" }} // Установите необходимые ограничения по типу файлов
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="file-input"
      />
      <label htmlFor="file-input">
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<CloudUpload />}
        />
      </label>
      <IconButton color="primary" onClick={handleUpload}>
        <CloudUpload />
      </IconButton>
    </div>
  );
}
