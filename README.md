# Latihan UKL Paket 1 - Attendance Management API

Proyek ini merupakan latihan soal Uji Kenaikan Level (UKL) untuk siswa kelas XI RPL. API ini menyediakan sistem manajemen presensi dengan fitur authentication, authorization, dan analisis kehadiran.

## Tech Stack

- Express.js 5.1.0
- JSON Web Token (JWT)
- Express Validator
- MD5 (password hashing)
- Nodemon

## Fitur

### Authentication & Authorization
- Login dengan JWT token
- Role-based access control (Admin & User)
- Middleware authorization untuk proteksi endpoint

### Attendance Management
- Post attendance data
- Get attendance by ID
- Monthly attendance summary
- Attendance analysis berdasarkan periode dan role

## API Endpoints

### 1. Authentication

#### POST /auth
Login untuk mendapatkan JWT token.

**Request Body:**
```json
{
  "username": "Arunikas",
  "password": "12345"
}
```

**Response:**
```json
{
  "success": true,
  "logged": true,
  "message": "login success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "data": {
    "id": 1,
    "name": "Fajar",
    "username": "Arunikas",
    "password": "827ccb0eea8a706c4c34a16891f84e7b",
    "role": "admin"
  }
}
```

---

### 2. Users Management

#### POST /api/users
Tambah user baru (Admin only).

**Authorization:** Bearer Token (Admin)

**Request Header:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "nama": "John Doe",
  "username": "johndoe",
  "password": "password123",
  "role": "user"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "User added successfully",
  "data": {
    "id": 12,
    "nama": "John Doe",
    "username": "johndoe",
    "password": "password123",
    "role": "user"
  }
}
```

#### PUT /api/users/:id
Update user (User only - untuk user sendiri).

**Authorization:** Bearer Token (User)

**Request Header:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "nama": "John Updated",
  "username": "johnupdated",
  "password": "newpassword",
  "role": "user"
}
```

#### GET /api/users/:id
Get user by ID (Admin only).

**Authorization:** Bearer Token (Admin)

**Request Header:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "status": "success",
  "message": "User retrieved successfully",
  "data": {
    "id": 1,
    "name": "Fajar",
    "username": "Arunikas",
    "password": "827ccb0eea8a706c4c34a16891f84e7b",
    "role": "admin"
  }
}
```

---

### 3. Attendance Management

#### POST /api/attendance/:id
Post attendance untuk user tertentu.

**Request Body:**
```json
{
  "date": "2025-10-14",
  "time": "08:00:00",
  "status": "hadir"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Attendance added successfully",
  "data": {
    "user_id": 1,
    "date": "2025-10-14T00:00:00.000Z",
    "time": "08:00:00",
    "status": "hadir"
  }
}
```

#### GET /api/attendance/:id
Get attendance by attendance ID.

**Response:**
```json
{
  "status": "success",
  "data": {
    "attendance_id": 1,
    "user_id": 1,
    "date": "2025-10-14T00:00:00.000Z",
    "time": "08:01:12",
    "status": "hadir"
  }
}
```

#### GET /api/attendance/summary/monthly/:id
Get monthly attendance summary untuk user tertentu.

**Response:**
```json
{
  "status": "success",
  "message": "Monthly attendance summary fetched successfully",
  "data": {
    "userID": 1,
    "month": "10-2025",
    "summaryMothlyAttendance": {
      "hadir": 8,
      "sakit": 0,
      "izin": 1,
      "alpa": 1
    }
  }
}
```

#### POST /api/attendance/analysis/:id
Analisis attendance berdasarkan periode dan role.

**Request Body:**
```json
{
  "start_date": "2025-10-14",
  "end_date": "2025-10-20",
  "group_by": "admin"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Attendance analysis fetched successfully",
  "data": {
    "analysis_period": {
      "start_date": "2025-10-14",
      "end_date": "2025-10-20"
    },
    "group_analysis": {
      "group": "admin",
      "total_users": 1,
      "attendance_rate": {
        "hadir_percentage": "71.42857142857143 Percent",
        "sakit_percentage": "0 Percent",
        "izin_percentage": "14.285714285714286 Percent",
        "alpa_percentage": "14.285714285714286 Percent"
      },
      "total_attendance": {
        "hadir": 5,
        "sakit": 0,
        "izin": 1,
        "alpa": 1
      }
    }
  }
}
```

---

## Role-Based Access Control

### Admin
- Dapat menambah user baru
- Dapat melihat semua user
- Full access ke semua endpoint

### User
- Hanya dapat mengupdate data sendiri
- Terbatas akses ke endpoint tertentu

---

## Status Kehadiran

Sistem mendukung 4 jenis status kehadiran:
- `hadir` - Hadir tepat waktu
- `sakit` - Tidak hadir karena sakit
- `izin` - Tidak hadir dengan izin
- `alpa` - Tidak hadir tanpa keterangan

---

## Instalasi

```bash
# Clone repository
git clone <repository-url>

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## Catatan

- Semua password di-hash menggunakan MD5
- Token JWT menggunakan secret key "nawain"
- Data disimpan dalam array (in-memory) untuk keperluan latihan
- Server berjalan pada port 6354

---

**Dibuat untuk:** Latihan UKL Kelas XI RPL  
**Deadline:** 04 November 2025, 17:00 WIB
