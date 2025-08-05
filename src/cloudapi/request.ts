export interface HttpRequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  baseURL?: string;
  headers?: HeadersInit;
  timeout?: number;
  body?: unknown;
}

// deno-lint-ignore no-explicit-any
export interface HttpResponse<T = any> {
  data: T;
  status: number;
  ok: boolean;
}

export class HttpClient {
  constructor(private baseConfig: HttpRequestConfig = {}) {}

  private async request<T>(url: string, config: HttpRequestConfig = {}): Promise<HttpResponse<T>> {
    const finalUrl = (config.baseURL || this.baseConfig.baseURL || '') + url;

    const controller = new AbortController();
    const timeout = config.timeout || this.baseConfig.timeout;
    if (timeout) {
      setTimeout(() => controller.abort(), timeout);
    }

    const res = await fetch(finalUrl, {
      method: config.method || 'GET',
      headers: {
        ...this.baseConfig.headers,
        ...config.headers,
      },
      body: config.body ? JSON.stringify(config.body) : undefined,
      signal: controller.signal,
    });

    const contentType = res.headers.get("content-type") || "";
    let data: any;

    if (contentType.includes("application/json")) {
      data = await res.json();
    } else if (contentType.includes("text/")) {
      data = await res.text();
    } else {
      data = await res.arrayBuffer(); // 处理 application/octet-stream、图片、PDF 等
    }

    return {
      data: data as T,
      status: res.status,
      ok: res.ok,
    };
  }

  // deno-lint-ignore no-explicit-any
  get<T = any>(url: string, config?: HttpRequestConfig) {
    return this.request<T>(url, { ...config, method: 'GET' });
  }

  // deno-lint-ignore no-explicit-any
  post<T = any>(url: string, body: any, config?: HttpRequestConfig) {
    return this.request<T>(url, { ...config, method: 'POST', body });
  }

  // deno-lint-ignore no-explicit-any
  put<T = any>(url: string, body: any, config?: HttpRequestConfig) {
    return this.request<T>(url, { ...config, method: 'PUT', body });
  }

  // deno-lint-ignore no-explicit-any
  patch<T = any>(url: string, body: any, config?: HttpRequestConfig) {
    return this.request<T>(url, { ...config, method: 'PATCH', body });
  }

  // deno-lint-ignore no-explicit-any
  delete<T = any>(url: string, config?: HttpRequestConfig) {
    return this.request<T>(url, { ...config, method: 'DELETE' });
  }
}
