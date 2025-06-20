import { AdminGuard } from "@/components/admin-guard"

function AdminPanel() {
  // ... existing AdminPanel component code stays the same
  return (
    <div>
      <h1>Admin Panel</h1>
      <p>This is the admin panel.</p>
    </div>
  )
}

export default function AdminPanelPage() {
  return (
    <AdminGuard>
      <AdminPanel />
    </AdminGuard>
  )
}
