// Camera module — selfie capture & photo upload
const Camera = (() => {
  let stream = null;
  let photoDataUrl = null;

  const els = () => ({
    video: document.getElementById('camera-video'),
    canvas: document.getElementById('camera-canvas'),
    preview: document.getElementById('photo-preview'),
    placeholder: document.getElementById('camera-placeholder'),
    faceGuide: document.getElementById('face-guide'),
    shutter: document.getElementById('btn-shutter'),
    captureControls: document.getElementById('capture-controls'),
    photoActions: document.getElementById('photo-actions'),
  });

  async function startCamera() {
    const e = els();
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } }
      });
      e.video.srcObject = stream;
      e.video.classList.add('active');
      e.placeholder.classList.add('hidden');
      e.faceGuide.classList.add('visible');
      e.captureControls.style.display = 'none';
      e.shutter.classList.add('visible');
    } catch (err) {
      alert('Could not access camera. Please upload a photo instead.');
      console.error('Camera error:', err);
    }
  }

  function takePhoto() {
    const e = els();
    const canvas = e.canvas;
    const video = e.video;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    // Mirror the selfie
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0);
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    photoDataUrl = canvas.toDataURL('image/jpeg', 0.9);
    showPreview(e);
    stopStream();
  }

  function handleUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      photoDataUrl = ev.target.result;
      showPreview(els());
    };
    reader.readAsDataURL(file);
    // Reset the input so the same file can be re-selected
    event.target.value = '';
  }

  function showPreview(e) {
    e.preview.src = photoDataUrl;
    e.preview.classList.add('active');
    e.video.classList.remove('active');
    e.faceGuide.classList.remove('visible');
    e.placeholder.classList.add('hidden');
    e.shutter.classList.remove('visible');
    e.captureControls.style.display = 'none';
    e.photoActions.style.display = 'flex';
  }

  function retake() {
    const e = els();
    photoDataUrl = null;
    e.preview.classList.remove('active');
    e.preview.src = '';
    e.photoActions.style.display = 'none';
    e.captureControls.style.display = 'flex';
    e.placeholder.classList.remove('hidden');
    e.faceGuide.classList.remove('visible');
    stopStream();
  }

  function stopStream() {
    if (stream) {
      stream.getTracks().forEach(t => t.stop());
      stream = null;
    }
    const e = els();
    e.video.classList.remove('active');
    e.video.srcObject = null;
  }

  function getPhotoDataUrl() {
    return photoDataUrl;
  }

  return { startCamera, takePhoto, handleUpload, retake, getPhotoDataUrl, stopStream };
})();
