'use client';

import { useState } from 'react';
import Image from 'next/image';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'buyer' | 'seller';
  status: 'active' | 'pending' | 'rejected';
  registrationDate: string;
  businessLicense?: string; // For sellers only
  phoneNumber: string;
  address?: string;
}

// Mock data - would come from an API in a real application
const mockUsers: User[] = [
  {
    id: 1,
    name: 'علی محمدی',
    email: 'ali@example.com',
    role: 'seller',
    status: 'pending',
    registrationDate: '1402/12/15',
    businessLicense: 'https://fakeimg.pl/600x400/cccccc/909090?text=License',
    phoneNumber: '09123456789',
    address: 'تهران، خیابان ولیعصر، پلاک ۱۲۳'
  },
  // Add more mock users as needed
];

export default function AdminUsers() {
  const [users, setUsers] = useState(mockUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const handleStatusChange = (userId: number, newStatus: User['status']) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setIsDetailsModalOpen(true);
  };

  const handleSaveEdit = (editedUser: User) => {
    setUsers(users.map(user => 
      user.id === editedUser.id ? editedUser : user
    ));
    setIsDetailsModalOpen(false);
    setSelectedUser(null);
  };

  const getStatusColor = (status: User['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
    }
  };

  const getStatusText = (status: User['status']) => {
    switch (status) {
      case 'active':
        return 'فعال';
      case 'pending':
        return 'در انتظار تایید';
      case 'rejected':
        return 'رد شده';
    }
  };

  const getRoleText = (role: User['role']) => {
    return role === 'seller' ? 'فروشنده' : 'خریدار';
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">مدیریت کاربران</h1>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">نام</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">ایمیل</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">نقش</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">تاریخ ثبت‌نام</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">وضعیت</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">عملیات</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {getRoleText(user.role)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.registrationDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(user.status)}`}>
                    {getStatusText(user.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 space-x-reverse">
                  <button
                    onClick={() => handleEdit(user)}
                    className="text-blue-600 hover:text-blue-900 ml-2"
                  >
                    مشاهده و ویرایش
                  </button>
                  {user.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleStatusChange(user.id, 'active')}
                        className="text-green-600 hover:text-green-900 ml-2"
                      >
                        تایید
                      </button>
                      <button
                        onClick={() => handleStatusChange(user.id, 'rejected')}
                        className="text-red-600 hover:text-red-900"
                      >
                        رد
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Details/Edit Modal */}
      {isDetailsModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">اطلاعات کاربر</h2>
              <button
                onClick={() => {
                  setIsDetailsModalOpen(false);
                  setSelectedUser(null);
                }}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              handleSaveEdit(selectedUser);
            }}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      نام
                    </label>
                    <input
                      type="text"
                      value={selectedUser.name}
                      onChange={(e) => setSelectedUser({
                        ...selectedUser,
                        name: e.target.value
                      })}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ایمیل
                    </label>
                    <input
                      type="email"
                      value={selectedUser.email}
                      onChange={(e) => setSelectedUser({
                        ...selectedUser,
                        email: e.target.value
                      })}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    شماره تماس
                  </label>
                  <input
                    type="tel"
                    value={selectedUser.phoneNumber}
                    onChange={(e) => setSelectedUser({
                      ...selectedUser,
                      phoneNumber: e.target.value
                    })}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    آدرس
                  </label>
                  <textarea
                    value={selectedUser.address || ''}
                    onChange={(e) => setSelectedUser({
                      ...selectedUser,
                      address: e.target.value
                    })}
                    rows={2}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {selectedUser.role === 'seller' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      جواز کسب
                    </label>
                    {selectedUser.businessLicense && (
                      <div className="relative w-full h-48 mb-2">
                        <Image
                          src={selectedUser.businessLicense}
                          alt="جواز کسب"
                          fill
                          className="object-contain rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-6 flex justify-end space-x-2 space-x-reverse">
                <button
                  type="button"
                  onClick={() => {
                    setIsDetailsModalOpen(false);
                    setSelectedUser(null);
                  }}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  ذخیره تغییرات
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 