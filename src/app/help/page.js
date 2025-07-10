export default function Help() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-rose-600 mb-4">Help & Support</h1>
      <p className="mb-8 text-gray-700">Need assistance? Check out our frequently asked questions, order guide, or contact our support team.</p>
      <section className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <ul className="mb-2 text-gray-700">
          <li><span className="font-medium">Email:</span> support@foodhaven.com</li>
          <li><span className="font-medium">Phone:</span> +91 98765 43210</li>
          <li><span className="font-medium">Support Hours:</span> 9:00 AM - 11:00 PM, All days</li>
        </ul>
        <a href="mailto:support@foodhaven.com" className="text-rose-600 hover:underline">Send us an email</a>
      </section>
      <section className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">How to Place an Order</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Browse the menu and select your favorite dishes.</li>
          <li>Click "Add to Cart" for each item you want.</li>
          <li>Go to the Cart page and review your order.</li>
          <li>Click "Checkout" and follow the payment instructions.</li>
          <li>Track your order status and enjoy your meal!</li>
        </ol>
      </section>
      <section className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <ul className="space-y-4">
          <li>
            <span className="font-medium text-gray-900">How do I place an order?</span>
            <p className="text-gray-600">Browse the menu, add items to your cart, and proceed to checkout.</p>
          </li>
          <li>
            <span className="font-medium text-gray-900">Can I track my delivery?</span>
            <p className="text-gray-600">Yes, you can track your order status in the Cart page after placing an order.</p>
          </li>
          <li>
            <span className="font-medium text-gray-900">What payment methods are accepted?</span>
            <p className="text-gray-600">We accept credit/debit cards, UPI, and cash on delivery.</p>
          </li>
          <li>
            <span className="font-medium text-gray-900">How do I give feedback?</span>
            <p className="text-gray-600">You can <a href='/feedback' className='text-rose-600 hover:underline'>submit feedback here</a> or email us at support@foodhaven.com.</p>
          </li>
        </ul>
      </section>
    </main>
  );
} 