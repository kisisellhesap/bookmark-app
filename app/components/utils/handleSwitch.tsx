const handleClick = (type: string) => {
  switch (type) {
    case "Visit":
      handleVisit("s");
      break;
    case "Copy URL":
      handleCopy(copyUrl);
      break;
    case "Unpin":
      alert("Düzenleniyor...");
      break;
    case "Edit":
      setType("edit");
      setIsActive(true);
      break;
    case "Archive":
      setType("archive");
      setIsActive(true);
      break;
    case "Unarchive":
      setType("unarchive");
      setIsActive(true);
      break;
    case "Delete permanently":
      setType("delete");
      setIsActive(true);
      break;
    default:
      alert("Bilinmeyen işlem!");
  }
};
