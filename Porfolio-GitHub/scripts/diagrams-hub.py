"""
Enterprise Observability Hub — Architecture Diagram
Using: mingrammer/diagrams  (pip install diagrams)
Requires: Graphviz on PATH   https://graphviz.org/download/

Run:
  python scripts/diagrams-hub.py
Output: enterprise-observability-hub.png
"""

from diagrams import Diagram, Cluster, Edge

# Elastic Stack
from diagrams.elastic.elasticsearch import (
    Elasticsearch,
    Kibana,
    Logstash,           # OpenTelemetry Collector proxy (data pipeline)
    Beats,              # Elastic Agent (fleet-managed beats)
    Alerting,           # Alerts & Reporting
    SearchableSnapshots,# Snapshot Repository
    SecuritySettings,   # SIEM / Security
    Monitoring,         # APM / Observability
)

# Infrastructure & automation
from diagrams.onprem.compute import Server
from diagrams.onprem.client import Client
from diagrams.onprem.database import PostgreSQL
from diagrams.onprem.iac import Terraform, Ansible
from diagrams.onprem.vcs import Github
from diagrams.onprem.security import Vault
from diagrams.k8s.compute import Pod
from diagrams.aws.compute import EC2
from diagrams.aws.database import RDS
from diagrams.generic.compute import Rack

# ── Graph styling (dark theme) ─────────────────────────────────────────────────
GRAPH = {
    "bgcolor":   "#0a0f1a",
    "fontcolor": "#94a3b8",
    "fontname":  "Helvetica Neue",
    "fontsize":  "13",
    "pad":       "1.0",
    "splines":   "ortho",
    "ranksep":   "1.4",
    "nodesep":   "0.6",
}
NODE = {
    "fontcolor": "#f8fafc",
    "fontname":  "Helvetica Neue",
    "fontsize":  "11",
}
CLUSTER_STYLE = {
    "bgcolor":   "#111827",
    "fontcolor": "#475569",
    "fontname":  "Helvetica Neue",
    "fontsize":  "10",
    "style":     "dashed",
    "color":     "#1e293b",
}

# ── Diagram ────────────────────────────────────────────────────────────────────
with Diagram(
    "Enterprise Observability Hub",
    show=False,
    filename="enterprise-observability-hub",
    direction="LR",
    outformat="png",
    graph_attr=GRAPH,
    node_attr=NODE,
):
    # ── Data Sources ───────────────────────────────────────────────────────────
    with Cluster("Data Sources", graph_attr=CLUSTER_STYLE):
        apps    = Server("Applications")
        infra   = Rack("Infrastructure")
        cloud   = EC2("Cloud Services")
        dbs     = PostgreSQL("Databases")
        ep      = Client("Endpoints")
        sec_src = Vault("Security Events")
        custom  = RDS("Custom Apps")

    # ── Collect ────────────────────────────────────────────────────────────────
    with Cluster("Collect", graph_attr=CLUSTER_STYLE):
        otel  = Logstash("OpenTelemetry\nCollector")   # closest available icon
        agent = Beats("Elastic Agent")

    # ── Process & Store ────────────────────────────────────────────────────────
    with Cluster("Process & Store", graph_attr=CLUSTER_STYLE):
        es = Elasticsearch("Elasticsearch\nCluster")

        with Cluster("ILM Tiers", graph_attr={**CLUSTER_STYLE, "bgcolor": "#0f172a"}):
            hot  = Server("Hot")
            warm = Server("Warm")
            cold = Server("Cold")

        snap = SearchableSnapshots("Snapshot\nRepository")

    # ── Analyze & Act ──────────────────────────────────────────────────────────
    with Cluster("Analyze & Act", graph_attr=CLUSTER_STYLE):
        kibana   = Kibana("Kibana")
        apm      = Monitoring("APM")
        siem     = SecuritySettings("Security /\nSIEM")
        alerting = Alerting("Alerts &\nReporting")

    # ── Automate & Orchestrate ─────────────────────────────────────────────────
    with Cluster("Automate & Orchestrate", graph_attr=CLUSTER_STYLE):
        k8s     = Pod("Kubernetes")
        tf      = Terraform("Terraform")
        ansible = Ansible("Ansible")
        gitops  = Github("GitOps")

    # ── Data flow ──────────────────────────────────────────────────────────────
    # Instrumented sources → OTel Collector (OTLP)
    [apps, infra, cloud] >> Edge(color="#3b82f6") >> otel

    # Agent-based sources → Elastic Agent
    [dbs, ep, sec_src, custom] >> Edge(color="#06b6d4") >> agent

    # Collectors → Elasticsearch
    otel  >> Edge(color="#06b6d4", style="bold", label="OTLP") >> es
    agent >> Edge(color="#06b6d4", style="bold")               >> es

    # ILM lifecycle
    es   >> Edge(color="#f59e0b", label="ILM") >> hot
    hot  >> Edge(color="#f59e0b")              >> warm
    warm >> Edge(color="#f59e0b")              >> cold
    cold >> Edge(color="#f59e0b", style="dashed") >> snap

    # Elasticsearch → visualization
    es >> Edge(color="#10b981") >> kibana
    es >> Edge(color="#10b981") >> apm
    es >> Edge(color="#10b981") >> siem
    es >> Edge(color="#10b981") >> alerting

    # Automation → Elasticsearch
    [k8s, tf, ansible, gitops] >> Edge(color="#8b5cf6", style="dashed") >> es

print("OK  Diagram written to: enterprise-observability-hub.png")
