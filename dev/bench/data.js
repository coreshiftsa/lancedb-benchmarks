window.BENCHMARK_DATA = {
  "lastUpdate": 1779230415040,
  "repoUrl": "https://github.com/CoreShiftCompany/lancedb",
  "entries": {
    "Rust Large Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "CoreShiftCompany",
            "username": "CoreShiftCompany"
          },
          "committer": {
            "name": "CoreShiftCompany",
            "username": "CoreShiftCompany"
          },
          "id": "0fca8c7911a649391cfda6db8ad6a88c8e5e2fc1",
          "message": "feat: Add foundational vector search and ingestion benchmarks",
          "timestamp": "2026-05-17T05:43:25Z",
          "url": "https://github.com/CoreShiftCompany/lancedb/pull/19/commits/0fca8c7911a649391cfda6db8ad6a88c8e5e2fc1"
        },
        "date": 1779230414157,
        "tool": "cargo",
        "benches": [
          {
            "name": "Large Vector Indexing/build_ivf_pq_index_100k_vectors_128d",
            "value": 2610108198,
            "range": "± 84226537",
            "unit": "ns/iter"
          },
          {
            "name": "Large Vector Search/knn_search_100k_vectors_128d_k10",
            "value": 1946539,
            "range": "± 134556",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}