import React, { useState, useEffect } from "react";
import Heading from "../../components/Heading";

const url = "https://iem-singapore-backend.smartsociety.org";
// const url = "http://192.168.1.226:5000";

const BADGE = {
  success: "bg-emerald-100 text-emerald-700 border border-emerald-200",
  pending: "bg-amber-100 text-amber-700 border border-amber-200",
  failed: "bg-red-100 text-red-700 border border-red-200",
};

const MODE_BADGE = {
  online: "bg-blue-100 text-blue-700 border border-blue-200",
  offline: "bg-purple-100 text-purple-700 border border-purple-200",
};

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  const delta = 2;
  const left = Math.max(2, currentPage - delta);
  const right = Math.min(totalPages - 1, currentPage + delta);

  pages.push(1);
  if (left > 2) pages.push("...");
  for (let i = left; i <= right; i++) pages.push(i);
  if (right < totalPages - 1) pages.push("...");
  if (totalPages > 1) pages.push(totalPages);

  return (
    <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1.5 rounded-md border border-gray-300 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        ← Prev
      </button>

      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={`ellipsis-${idx}`} className="px-2 text-gray-400 text-sm">
            …
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1.5 rounded-md border text-sm font-medium transition-colors ${
              currentPage === page
                ? "bg-blue-theme text-white border-blue-theme"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1.5 rounded-md border border-gray-300 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Next →
      </button>
    </div>
  );
}

function SkeletonRow() {
  return (
    <tr className="animate-pulse">
      {[...Array(8)].map((_, i) => (
        <td key={i} className="p-4">
          <div className="h-4 bg-gray-200 rounded w-full" />
        </td>
      ))}
    </tr>
  );
}

function Admin() {
  const [registrations, setRegistrations] = useState([]);
  const [pagination, setPagination] = useState({ total: 0, page: 1, totalPages: 1 });
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchRegistrations = async (page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${url}/api/v1/registrations?page=${page}&limit=10`);
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed to fetch");
      setRegistrations(data.data.registrations);
      setPagination(data.data.pagination);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistrations(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > pagination.totalPages) return;
    setCurrentPage(page);
  };

  const filtered = registrations.filter((r) =>
    search
      ? r.name?.toLowerCase().includes(search.toLowerCase()) ||
        r.email?.toLowerCase().includes(search.toLowerCase()) ||
        r.paperId?.toLowerCase().includes(search.toLowerCase())
      : true
  );

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 items-center w-full">
      <Heading title1="Admin" title2="Dashboard" />

      {/* Stats row */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Registrations", value: pagination.total, color: "text-blue-theme" },
          { label: "Page", value: `${pagination.page} / ${pagination.totalPages}`, color: "text-gray-700" },
          {
            label: "Successful Payments",
            value: registrations.filter((r) => r.paymentStatus === "success").length,
            color: "text-emerald-600",
          },
          {
            label: "Pending / Failed",
            value: registrations.filter((r) => r.paymentStatus !== "success").length,
            color: "text-amber-600",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-gray-200 shadow-sm bg-white p-4 flex gap-6 items-center justify-between poppins"
          >
            <span className="text-md text-gray-500 font-medium">{stat.label}</span>
            <span className={`text-2xl font-semibold text-center ${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Main table card */}
      <div className="w-full rounded-3xl shadow-md border border-gray-300 lg:p-10 md:p-8 p-5 flex flex-col gap-6 bg-white">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 poppins">Registrations</h2>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search name, email, paper ID…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none text-gray-700 poppins w-64 shadow-sm"
            />
            <button
              onClick={() => fetchRegistrations(currentPage)}
              className="px-4 py-2 bg-blue-theme text-white text-sm rounded-lg poppins font-medium hover:bg-[#102768] transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 poppins">
            ⚠ {error}
          </div>
        )}

        {/* Table */}
        <div className="overflow-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm poppins min-w-[900px]">
            <thead className="bg-blue-theme text-white">
              <tr className="text-left">
                <th className="p-4 font-semibold whitespace-nowrap text-center">#</th>
                <th className="p-4 font-semibold whitespace-nowrap">Name</th>
                <th className="p-4 font-semibold whitespace-nowrap">Email</th>
                <th className="p-4 font-semibold whitespace-nowrap">Institute / Company</th>
                <th className="p-4 font-semibold whitespace-nowrap text-center">Category</th>
                <th className="p-4 font-semibold whitespace-nowrap text-center">Paper ID</th>
                <th className="p-4 font-semibold whitespace-nowrap text-center">Mode</th>
                <th className="p-4 font-semibold whitespace-nowrap text-center">Amount</th>
                <th className="p-4 font-semibold whitespace-nowrap text-center">Payment</th>
                <th className="p-4 font-semibold whitespace-nowrap text-center">Proof</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {loading ? (
                [...Array(5)].map((_, i) => <SkeletonRow key={i} />)
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={10} className="text-center py-16 text-gray-400">
                    No registrations found.
                  </td>
                </tr>
              ) : (
                filtered.map((reg, idx) => (
                  <tr key={reg._id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 pl-5 text-gray-400 font-medium text-center">
                      {(currentPage - 1) * 10 + idx + 1}
                    </td>
                    <td className="p-4 font-medium text-gray-800 whitespace-nowrap">{reg.name}</td>
                    <td className="p-4 text-gray-600 whitespace-nowrap">{reg.email}</td>
                    <td className="p-4 text-gray-600 max-w-[180px] truncate" title={reg.instituteOrCompany}>
                      {reg.instituteOrCompany}
                    </td>
                    <td className="p-4 whitespace-nowrap text-center">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                        {reg.registrationCategory}
                      </span>
                    </td>
                    <td className="p-4 font-mono text-gray-700 whitespace-nowrap text-center">{reg.paperId}</td>
                    <td className="p-4 whitespace-nowrap text-center">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                          MODE_BADGE[reg.presentationMode] || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {reg.presentationMode}
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-gray-800 whitespace-nowrap text-center">
                      {reg.amount} SGD
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium capitalize text-center ${
                          BADGE[reg.paymentStatus] || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {reg.paymentStatus}
                      </span>
                    </td>
                    <td className="p-4 whitespace-nowrap text-center">
                      {reg.paymentProofImageUrl ? (
                        <a
                          href={reg.paymentProofImageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-theme underline text-xs font-medium hover:text-[#102768]"
                        >
                          View
                        </a>
                      ) : (
                        <span className="text-gray-300 text-xs">—</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {!loading && pagination.totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={pagination.totalPages}
            onPageChange={handlePageChange}
          />
        )}

        {/* Footer count */}
        {!loading && (
          <p className="text-center text-xs text-gray-400 poppins">
            Showing {filtered.length} of {pagination.total} registrations
          </p>
        )}
      </div>
    </div>
  );
}

export default Admin;