-- CreateTable
CREATE TABLE "Drone" (
    "image_id" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "altitude_m" INTEGER NOT NULL,
    "heading_deg" INTEGER NOT NULL,
    "file_name" TEXT NOT NULL,
    "camera_tilt_deg" INTEGER NOT NULL,
    "focal_length_mm" INTEGER NOT NULL,
    "iso" INTEGER NOT NULL,
    "shutter_speed" TEXT NOT NULL,
    "aperture" TEXT NOT NULL,
    "color_temp_k" INTEGER NOT NULL,
    "image_format" TEXT NOT NULL,
    "file_size_mb" DOUBLE PRECISION NOT NULL,
    "drone_speed_mps" DOUBLE PRECISION NOT NULL,
    "battery_level_pct" INTEGER NOT NULL,
    "gps_accuracy_m" DOUBLE PRECISION NOT NULL,
    "gimbal_mode" TEXT NOT NULL,
    "subject_detection" TEXT NOT NULL,
    "image_tags" TEXT[],

    CONSTRAINT "Drone_pkey" PRIMARY KEY ("image_id")
);
