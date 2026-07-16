/* ============================================================
   Traditional Healthcare Advisory — MEDIA (camera / gallery)
   Lets the person capture a live photo or pick one from their
   gallery. The image is resized in the browser (so it doesn't
   blow past sessionStorage's ~5MB limit) and kept for the rest
   of the session. NOTE: this only captures/stores the image —
   actual AI analysis of the photo needs a paid vision API and
   a backend, which is out of scope for this free build.
   ============================================================ */

const THCA_PHOTO_KEY = "thca_photo";

function handleImageFile(file, previewEl, onStored){
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const maxW = 800;
      const scale = Math.min(1, maxW / img.width);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.7);

      try{
        sessionStorage.setItem(THCA_PHOTO_KEY, dataUrl);
      }catch(err){
        console.warn("Photo too large to keep for the session — showing preview only.");
      }

      if(previewEl){
        previewEl.src = dataUrl;
        previewEl.style.display = "block";
      }
      if(onStored) onStored(dataUrl);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

/* Returns the stored photo (data URL) from earlier in this session, or null. */
function getStoredPhoto(){
  return sessionStorage.getItem(THCA_PHOTO_KEY);
}
