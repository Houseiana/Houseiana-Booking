'use client';

import { useState } from 'react';
import { Plus, Minus, Users } from 'lucide-react';

interface RoomConfig {
  adults: number;
  children: number;
}

interface RoomGuestPickerProps {
  value?: RoomConfig[];
  onChange?: (rooms: RoomConfig[]) => void;
  locale?: 'en' | 'ar';
}

export function RoomGuestPicker({
  value = [{ adults: 2, children: 0 }],
  onChange,
  locale = 'en'
}: RoomGuestPickerProps) {
  const [rooms, setRooms] = useState<RoomConfig[]>(value);

  const handleRoomChange = (index: number, field: 'adults' | 'children', delta: number) => {
    const newRooms = [...rooms];
    const newValue = Math.max(field === 'adults' ? 1 : 0, newRooms[index][field] + delta);

    // Limit: max 8 adults per room, max 4 children per room
    if (field === 'adults' && newValue > 8) return;
    if (field === 'children' && newValue > 4) return;

    newRooms[index][field] = newValue;
    setRooms(newRooms);
    onChange?.(newRooms);
  };

  const addRoom = () => {
    if (rooms.length < 4) {
      const newRooms = [...rooms, { adults: 2, children: 0 }];
      setRooms(newRooms);
      onChange?.(newRooms);
    }
  };

  const removeRoom = (index: number) => {
    if (rooms.length > 1) {
      const newRooms = rooms.filter((_, i) => i !== index);
      setRooms(newRooms);
      onChange?.(newRooms);
    }
  };

  const getTotalGuests = () => {
    return rooms.reduce((sum, room) => sum + room.adults + room.children, 0);
  };

  const t = {
    room: locale === 'ar' ? 'الغرفة' : 'Room',
    adults: locale === 'ar' ? 'البالغين' : 'Adults',
    childrenUnder12: locale === 'ar' ? 'الأطفال (أقل من 12)' : 'Children (under 12)',
    addRoom: locale === 'ar' ? 'إضافة غرفة' : 'Add Room',
    removeRoom: locale === 'ar' ? 'إزالة الغرفة' : 'Remove Room',
    totalGuests: locale === 'ar' ? 'إجمالي الضيوف' : 'Total Guests',
  };

  return (
    <div className="space-y-4">
      {rooms.map((room, index) => (
        <div key={index} className="rounded-xl border border-gray-200 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-sm font-semibold text-gray-700">
              {t.room} {index + 1}
            </h4>
            {rooms.length > 1 && (
              <button
                type="button"
                onClick={() => removeRoom(index)}
                className="text-xs text-red-600 hover:text-red-700"
              >
                {t.removeRoom}
              </button>
            )}
          </div>

          {/* Adults Counter */}
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-gray-600">{t.adults}</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleRoomChange(index, 'adults', -1)}
                disabled={room.adults <= 1}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center font-medium">{room.adults}</span>
              <button
                type="button"
                onClick={() => handleRoomChange(index, 'adults', 1)}
                disabled={room.adults >= 8}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Children Counter */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{t.childrenUnder12}</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleRoomChange(index, 'children', -1)}
                disabled={room.children <= 0}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center font-medium">{room.children}</span>
              <button
                type="button"
                onClick={() => handleRoomChange(index, 'children', 1)}
                disabled={room.children >= 4}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Add Room Button */}
      {rooms.length < 4 && (
        <button
          type="button"
          onClick={addRoom}
          className="w-full rounded-xl border-2 border-dashed border-gray-300 py-3 text-sm font-medium text-gray-600 hover:border-primary hover:text-primary transition-colors"
        >
          + {t.addRoom}
        </button>
      )}

      {/* Total Guests Summary */}
      <div className="flex items-center justify-between rounded-xl bg-sky/50 px-4 py-3">
        <div className="flex items-center gap-2">
          <Users size={18} className="text-primary" />
          <span className="text-sm font-semibold text-gray-700">{t.totalGuests}</span>
        </div>
        <span className="text-lg font-bold text-primary">{getTotalGuests()}</span>
      </div>
    </div>
  );
}
