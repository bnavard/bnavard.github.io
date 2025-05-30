import cv2

# Load the video file
video_path = "vins_drift_transition.mp4"
video = cv2.VideoCapture(video_path)

# Get total frame count and the middle frame index
frame_count = int(video.get(cv2.CAP_PROP_FRAME_COUNT))
middle_frame_index = 120

# Set the video to the middle frame
video.set(cv2.CAP_PROP_POS_FRAMES, middle_frame_index)

# Read the frame
success, middle_frame = video.read()
video.release()

# Save the middle frame as an image if successful
if success:
    middle_frame_path = "middle_frame.jpeg"
    cv2.imwrite(middle_frame_path, middle_frame)

middle_frame_path if success else "Could not extract frame."
