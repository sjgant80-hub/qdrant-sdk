/**
 * qdrant-sdk · sovereign wrapper for Qdrant
 * Vector DB
 *
 * Auto-generated from OpenAPI spec · 2026-07-11
 * 75 endpoints wrapped · spec version master
 *
 * Docs (upstream): https://api.qdrant.tech/
 * Homepage: https://qdrant.tech
 */

export class Qdrant {
  constructor({ apiKey, baseURL = '{protocol}://{hostname}:{port}', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      'Authorization': apiKey ? 'Bearer ' + apiKey : '',
      
      ...headers
    };
  }

  /** GET /collections/{collection_name}/shards · List shard keys */
  async listShardKeys(params = {}) {
    let path = '/collections/{collection_name}/shards'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /collections/{collection_name}/shards · Create shard key */
  async createShardKey(params = {}) {
    let path = '/collections/{collection_name}/shards'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/shards/delete · Delete shard key */
  async deleteShardKey(params = {}) {
    let path = '/collections/{collection_name}/shards/delete'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET / · Returns information about the running Qdrant instance */
  async root(params = {}) {
    let path = '/'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /telemetry · Collect telemetry data */
  async telemetry(params = {}) {
    let path = '/telemetry'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /metrics · Collect Prometheus metrics data */
  async metrics(params = {}) {
    let path = '/metrics'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /healthz · Kubernetes healthz endpoint */
  async healthz(params = {}) {
    let path = '/healthz'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /livez · Kubernetes livez endpoint */
  async livez(params = {}) {
    let path = '/livez'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /readyz · Kubernetes readyz endpoint */
  async readyz(params = {}) {
    let path = '/readyz'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /issues · Get issues */
  async getIssues(params = {}) {
    let path = '/issues'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /issues · Clear issues */
  async clearIssues(params = {}) {
    let path = '/issues'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /cluster · Get cluster status info */
  async clusterStatus(params = {}) {
    let path = '/cluster'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /cluster/telemetry · Collect cluster telemetry data */
  async clusterTelemetry(params = {}) {
    let path = '/cluster/telemetry'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /cluster/recover · Tries to recover current peer Raft state. */
  async recoverCurrentPeer(params = {}) {
    let path = '/cluster/recover'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /cluster/peer/{peer_id} · Remove peer from the cluster */
  async removePeer(params = {}) {
    let path = '/cluster/peer/{peer_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /collections · List collections */
  async getCollections(params = {}) {
    let path = '/collections'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /collections/{collection_name} · Collection info */
  async getCollection(params = {}) {
    let path = '/collections/{collection_name}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /collections/{collection_name} · Create collection */
  async createCollection(params = {}) {
    let path = '/collections/{collection_name}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /collections/{collection_name} · Update collection parameters */
  async updateCollection(params = {}) {
    let path = '/collections/{collection_name}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /collections/{collection_name} · Delete collection */
  async deleteCollection(params = {}) {
    let path = '/collections/{collection_name}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/aliases · Update aliases of the collections */
  async updateAliases(params = {}) {
    let path = '/collections/aliases'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /collections/{collection_name}/index · Create index for field in collection */
  async createFieldIndex(params = {}) {
    let path = '/collections/{collection_name}/index'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /collections/{collection_name}/exists · Check the existence of a collection */
  async collectionExists(params = {}) {
    let path = '/collections/{collection_name}/exists'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /collections/{collection_name}/index/{field_name} · Delete index for field in collection */
  async deleteFieldIndex(params = {}) {
    let path = '/collections/{collection_name}/index/{field_name}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /collections/{collection_name}/vectors/{vector_name} · Create named vector */
  async createVectorName(params = {}) {
    let path = '/collections/{collection_name}/vectors/{vector_name}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /collections/{collection_name}/vectors/{vector_name} · Delete named vector */
  async deleteVectorName(params = {}) {
    let path = '/collections/{collection_name}/vectors/{vector_name}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /collections/{collection_name}/cluster · Collection cluster info */
  async collectionClusterInfo(params = {}) {
    let path = '/collections/{collection_name}/cluster'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/cluster · Update collection cluster setup */
  async updateCollectionCluster(params = {}) {
    let path = '/collections/{collection_name}/cluster'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /collections/{collection_name}/optimizations · Get optimization progress */
  async getOptimizations(params = {}) {
    let path = '/collections/{collection_name}/optimizations'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /collections/{collection_name}/aliases · List aliases for collection */
  async getCollectionAliases(params = {}) {
    let path = '/collections/{collection_name}/aliases'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /aliases · List collections aliases */
  async getCollectionsAliases(params = {}) {
    let path = '/aliases'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/snapshots/upload · Recover from an uploaded snapshot */
  async recoverFromUploadedSnapshot(params = {}) {
    let path = '/collections/{collection_name}/snapshots/upload'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /collections/{collection_name}/snapshots/recover · Recover from a snapshot */
  async recoverFromSnapshot(params = {}) {
    let path = '/collections/{collection_name}/snapshots/recover'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /collections/{collection_name}/snapshots · List collection snapshots */
  async listSnapshots(params = {}) {
    let path = '/collections/{collection_name}/snapshots'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/snapshots · Create collection snapshot */
  async createSnapshot(params = {}) {
    let path = '/collections/{collection_name}/snapshots'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /collections/{collection_name}/snapshots/{snapshot_name} · Download collection snapshot */
  async getSnapshot(params = {}) {
    let path = '/collections/{collection_name}/snapshots/{snapshot_name}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /collections/{collection_name}/snapshots/{snapshot_name} · Delete collection snapshot */
  async deleteSnapshot(params = {}) {
    let path = '/collections/{collection_name}/snapshots/{snapshot_name}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /snapshots · List of storage snapshots */
  async listFullSnapshots(params = {}) {
    let path = '/snapshots'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /snapshots · Create storage snapshot */
  async createFullSnapshot(params = {}) {
    let path = '/snapshots'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /snapshots/{snapshot_name} · Download storage snapshot */
  async getFullSnapshot(params = {}) {
    let path = '/snapshots/{snapshot_name}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /snapshots/{snapshot_name} · Delete storage snapshot */
  async deleteFullSnapshot(params = {}) {
    let path = '/snapshots/{snapshot_name}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /collections/{collection_name}/shards/{shard_id}/snapshot · Download shard snapshot */
  async streamShardSnapshot(params = {}) {
    let path = '/collections/{collection_name}/shards/{shard_id}/snapshot'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/shards/{shard_id}/snapshots/upload · Recover shard from an uploaded snapshot */
  async recoverShardFromUploadedSnapshot(params = {}) {
    let path = '/collections/{collection_name}/shards/{shard_id}/snapshots/upload'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /collections/{collection_name}/shards/{shard_id}/snapshots/recover · Recover from a snapshot */
  async recoverShardFromSnapshot(params = {}) {
    let path = '/collections/{collection_name}/shards/{shard_id}/snapshots/recover'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /collections/{collection_name}/shards/{shard_id}/snapshots · List shards snapshots for a collection */
  async listShardSnapshots(params = {}) {
    let path = '/collections/{collection_name}/shards/{shard_id}/snapshots'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/shards/{shard_id}/snapshots · Create shard snapshot */
  async createShardSnapshot(params = {}) {
    let path = '/collections/{collection_name}/shards/{shard_id}/snapshots'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /collections/{collection_name}/shards/{shard_id}/snapshots/{snapshot_name} · Download collection snapshot */
  async getShardSnapshot(params = {}) {
    let path = '/collections/{collection_name}/shards/{shard_id}/snapshots/{snapshot_name}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /collections/{collection_name}/shards/{shard_id}/snapshots/{snapshot_name} · Delete shard snapshot */
  async deleteShardSnapshot(params = {}) {
    let path = '/collections/{collection_name}/shards/{shard_id}/snapshots/{snapshot_name}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /collections/{collection_name}/points/{id} · Get point */
  async getPoint(params = {}) {
    let path = '/collections/{collection_name}/points/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points · Get points */
  async getPoints(params = {}) {
    let path = '/collections/{collection_name}/points'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /collections/{collection_name}/points · Upsert points */
  async upsertPoints(params = {}) {
    let path = '/collections/{collection_name}/points'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/delete · Delete points */
  async deletePoints(params = {}) {
    let path = '/collections/{collection_name}/points/delete'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /collections/{collection_name}/points/vectors · Update vectors */
  async updateVectors(params = {}) {
    let path = '/collections/{collection_name}/points/vectors'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/vectors/delete · Delete vectors */
  async deleteVectors(params = {}) {
    let path = '/collections/{collection_name}/points/vectors/delete'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/payload · Set payload */
  async setPayload(params = {}) {
    let path = '/collections/{collection_name}/points/payload'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /collections/{collection_name}/points/payload · Overwrite payload */
  async overwritePayload(params = {}) {
    let path = '/collections/{collection_name}/points/payload'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/payload/delete · Delete payload */
  async deletePayload(params = {}) {
    let path = '/collections/{collection_name}/points/payload/delete'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/payload/clear · Clear payload */
  async clearPayload(params = {}) {
    let path = '/collections/{collection_name}/points/payload/clear'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/batch · Batch update points */
  async batchUpdate(params = {}) {
    let path = '/collections/{collection_name}/points/batch'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/scroll · Scroll points */
  async scrollPoints(params = {}) {
    let path = '/collections/{collection_name}/points/scroll'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/search · Search points */
  async searchPoints(params = {}) {
    let path = '/collections/{collection_name}/points/search'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/search/batch · Search batch points */
  async searchBatchPoints(params = {}) {
    let path = '/collections/{collection_name}/points/search/batch'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/search/groups · Search point groups */
  async searchPointGroups(params = {}) {
    let path = '/collections/{collection_name}/points/search/groups'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/recommend · Recommend points */
  async recommendPoints(params = {}) {
    let path = '/collections/{collection_name}/points/recommend'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/recommend/batch · Recommend batch points */
  async recommendBatchPoints(params = {}) {
    let path = '/collections/{collection_name}/points/recommend/batch'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/recommend/groups · Recommend point groups */
  async recommendPointGroups(params = {}) {
    let path = '/collections/{collection_name}/points/recommend/groups'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/discover · Discover points */
  async discoverPoints(params = {}) {
    let path = '/collections/{collection_name}/points/discover'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/discover/batch · Discover batch points */
  async discoverBatchPoints(params = {}) {
    let path = '/collections/{collection_name}/points/discover/batch'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/count · Count points */
  async countPoints(params = {}) {
    let path = '/collections/{collection_name}/points/count'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/facet · Facet a payload key with a given filter. */
  async facet(params = {}) {
    let path = '/collections/{collection_name}/facet'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/query · Query points */
  async queryPoints(params = {}) {
    let path = '/collections/{collection_name}/points/query'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/query/batch · Query points in batch */
  async queryBatchPoints(params = {}) {
    let path = '/collections/{collection_name}/points/query/batch'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/query/groups · Query points, grouped by a given payload field */
  async queryPointsGroups(params = {}) {
    let path = '/collections/{collection_name}/points/query/groups'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/search/matrix/pairs · Search points matrix distance pairs */
  async searchMatrixPairs(params = {}) {
    let path = '/collections/{collection_name}/points/search/matrix/pairs'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /collections/{collection_name}/points/search/matrix/offsets · Search points matrix distance offsets */
  async searchMatrixOffsets(params = {}) {
    let path = '/collections/{collection_name}/points/search/matrix/offsets'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('qdrant ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }
}

export default Qdrant;
