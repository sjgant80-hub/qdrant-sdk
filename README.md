# @ai-native-solutions/qdrant-sdk

Sovereign wrapper for **Qdrant** · Vector DB

**75 endpoints** wrapped from OpenAPI spec.

## Install
```bash
npm install @ai-native-solutions/qdrant-sdk
```

## Use
```js
import Qdrant from '@ai-native-solutions/qdrant-sdk';
const client = new Qdrant({ apiKey: process.env.QDRANT_KEY });
```

## Endpoints (75)
- `GET /collections/{collection_name}/shards` · List shard keys
- `PUT /collections/{collection_name}/shards` · Create shard key
- `POST /collections/{collection_name}/shards/delete` · Delete shard key
- `GET /` · Returns information about the running Qdrant instance
- `GET /telemetry` · Collect telemetry data
- `GET /metrics` · Collect Prometheus metrics data
- `GET /healthz` · Kubernetes healthz endpoint
- `GET /livez` · Kubernetes livez endpoint
- `GET /readyz` · Kubernetes readyz endpoint
- `GET /issues` · Get issues
- `DELETE /issues` · Clear issues
- `GET /cluster` · Get cluster status info
- `GET /cluster/telemetry` · Collect cluster telemetry data
- `POST /cluster/recover` · Tries to recover current peer Raft state.
- `DELETE /cluster/peer/{peer_id}` · Remove peer from the cluster
- `GET /collections` · List collections
- `GET /collections/{collection_name}` · Collection info
- `PUT /collections/{collection_name}` · Create collection
- `PATCH /collections/{collection_name}` · Update collection parameters
- `DELETE /collections/{collection_name}` · Delete collection
_...and 55 more_

## License
MIT · Copyright 2026 AI-Native Solutions

## Upstream
- Docs: https://api.qdrant.tech/
- Homepage: https://qdrant.tech
