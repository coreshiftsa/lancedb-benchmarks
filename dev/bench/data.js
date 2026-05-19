window.BENCHMARK_DATA = {
  "lastUpdate": 1779232495026,
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
    ],
    "Python Foundational Benchmarks": [
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
        "date": 1779230670043,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_large_dataset_bench.py::test_benchmark_large_index_build",
            "value": 0.18906453545843122,
            "unit": "iter/sec",
            "range": "stddev: 0.060834595475521655",
            "extra": "mean: 5.289199254504638 sec\nrounds: 2"
          },
          {
            "name": "tests/benchmarks/test_large_dataset_bench.py::test_benchmark_large_dataset_recall_and_latency",
            "value": 2.440226859327963,
            "unit": "iter/sec",
            "range": "stddev: 0.001252584410577811",
            "extra": "mean: 409.79796455293484 msec\nrounds: 3"
          },
          {
            "name": "tests/benchmarks/test_vector_search_bench.py::test_benchmark_ingestion",
            "value": 26.966935393290633,
            "unit": "iter/sec",
            "range": "stddev: 0.004381011525951123",
            "extra": "mean: 37.08244876237586 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks/test_vector_search_bench.py::test_benchmark_streaming_ingestion",
            "value": 13.547017976352384,
            "unit": "iter/sec",
            "range": "stddev: 0.0019726927908601468",
            "extra": "mean: 73.81698332028463 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks/test_vector_search_bench.py::test_benchmark_concurrent_writes",
            "value": 27.20081758100312,
            "unit": "iter/sec",
            "range": "stddev: 0.0018795765830905914",
            "extra": "mean: 36.7636008374393 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks/test_vector_search_bench.py::test_benchmark_streaming_read_write",
            "value": 10.656896373936725,
            "unit": "iter/sec",
            "range": "stddev: 0.0014508253274686978",
            "extra": "mean: 93.83595044103761 msec\nrounds: 3"
          },
          {
            "name": "tests/benchmarks/test_vector_search_bench.py::test_benchmark_index_build",
            "value": 6.7910045315898735,
            "unit": "iter/sec",
            "range": "stddev: 0.018405655169246634",
            "extra": "mean: 147.25361989500624 msec\nrounds: 3"
          },
          {
            "name": "tests/benchmarks/test_vector_search_bench.py::test_benchmark_knn_search",
            "value": 172.2682973892637,
            "unit": "iter/sec",
            "range": "stddev: 0.0004255687422657402",
            "extra": "mean: 5.804898609640077 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_vector_search_bench.py::test_benchmark_knn_search_filtered",
            "value": 175.93421299187128,
            "unit": "iter/sec",
            "range": "stddev: 0.00013498146923050002",
            "extra": "mean: 5.683942781761289 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_vector_search_bench.py::test_benchmark_rag_workload",
            "value": 143.69623134017587,
            "unit": "iter/sec",
            "range": "stddev: 0.00032816532964251787",
            "extra": "mean: 6.959124749992043 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_vector_search_bench.py::test_benchmark_hybrid_search",
            "value": 138.8700442510389,
            "unit": "iter/sec",
            "range": "stddev: 0.00023428969434409133",
            "extra": "mean: 7.2009770385921 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_vector_search_bench.py::test_benchmark_knn_search_concurrent",
            "value": 36.426978455465765,
            "unit": "iter/sec",
            "range": "stddev: 0.00153592413344745",
            "extra": "mean: 27.452180839609355 msec\nrounds: 5"
          }
        ]
      }
    ],
    "Rust Foundational Benchmarks": [
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
        "date": 1779231119081,
        "tool": "cargo",
        "benches": [
          {
            "name": "Vector Ingestion/insert_10k_vectors_128d",
            "value": 17301262,
            "range": "± 2556845",
            "unit": "ns/iter"
          },
          {
            "name": "Vector Ingestion/insert_10k_streaming_1k_batches_128d",
            "value": 44652414,
            "range": "± 3210045",
            "unit": "ns/iter"
          },
          {
            "name": "Vector Ingestion/concurrent_writes_10_writers_1k_vectors_128d",
            "value": 25796085,
            "range": "± 4986910",
            "unit": "ns/iter"
          },
          {
            "name": "Vector End-to-End/streaming_read_write_1k_batches_128d",
            "value": 23812301,
            "range": "± 4885873",
            "unit": "ns/iter"
          },
          {
            "name": "Vector Search/knn_search_10k_vectors_128d_k10",
            "value": 3407173,
            "range": "± 194999",
            "unit": "ns/iter"
          },
          {
            "name": "Vector Search/knn_search_10k_vectors_128d_k10_filtered",
            "value": 3458009,
            "range": "± 132718",
            "unit": "ns/iter"
          },
          {
            "name": "Vector Search/knn_search_10k_vectors_128d_k10_concurrent_10",
            "value": 11242498,
            "range": "± 338640",
            "unit": "ns/iter"
          },
          {
            "name": "Vector Search/hybrid_search_10k_vectors_128d_k10",
            "value": 4162871,
            "range": "± 124460",
            "unit": "ns/iter"
          },
          {
            "name": "Vector Indexing/build_ivf_pq_index_10k_vectors_128d",
            "value": 288998807,
            "range": "± 75678918",
            "unit": "ns/iter"
          },
          {
            "name": "Vector End-to-End/rag_workload_1k_vectors_128d_hybrid_k5",
            "value": 1282039,
            "range": "± 74869",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "Python Large Benchmarks": [
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
        "date": 1779232494206,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_large_dataset_bench.py::test_benchmark_large_index_build",
            "value": 0.1958947207749436,
            "unit": "iter/sec",
            "range": "stddev: 0.033561697306537755",
            "extra": "mean: 5.104782793758204 sec\nrounds: 2"
          },
          {
            "name": "tests/benchmarks/test_large_dataset_bench.py::test_benchmark_large_dataset_recall_and_latency",
            "value": 2.5514103378665105,
            "unit": "iter/sec",
            "range": "stddev: 0.011620461585762435",
            "extra": "mean: 391.94009099931765 msec\nrounds: 3"
          }
        ]
      }
    ]
  }
}