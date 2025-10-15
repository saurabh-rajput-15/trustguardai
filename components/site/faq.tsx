"use client"

export function FAQ() {
  const faqs = [
    {
      q: "What if I don’t have formal documents?",
      a: "You can still register — the AI system verifies references and other available data.",
    },
    {
      q: "How long does verification take?",
      a: "Basic checks complete within minutes; deeper cross-checks may take up to 24 hours.",
    },
    {
      q: "How is my data protected?",
      a: "All uploads are encrypted and stored securely. Only verified users and our AI system can access them.",
    },
    {
      q: "Can I improve my Trust Score?",
      a: "Yes. You can update verified documents or request additional verification steps anytime.",
    },
  ]
  return (
    <section className="fade-in px-6 md:px-8 lg:px-12 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQs</h2>
        <dl className="mt-6 grid gap-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-md border p-4">
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-2 text-sm text-muted-foreground">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
