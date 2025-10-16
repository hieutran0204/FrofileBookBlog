// import {
//   getFirestore,
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   doc,
//   updateDoc,
// } from "firebase/firestore";
// import { db } from "./firebase";
// import { Blog } from "../types/blog";
// // 📝 Tạo blog mới
// export async function createBlog(
//   blogData: Omit<Blog, "id" | "createdAt" | "updatedAt">
// ) {
//   const docRef = await addDoc(collection(db, "blogs"), {
//     ...blogData,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   });
//   return docRef.id;
// }

// // 📖 Lấy toàn bộ blogs
// export async function getAllBlogs() {
//   const querySnapshot = await getDocs(collection(db, "blogs"));
//   const blogs = querySnapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));
//   return blogs as Blog[];
// }

// // ✏️ Cập nhật blog
// export async function updateBlog(blogId: string, newData: Partial<Blog>) {
//   const docRef = doc(db, "blogs", blogId);
//   await updateDoc(docRef, { ...newData, updatedAt: new Date() });
// }

// // 🗑️ Xóa blog
// export async function deleteBlog(blogId: string) {
//   await deleteDoc(doc(db, "blogs", blogId));
// }
