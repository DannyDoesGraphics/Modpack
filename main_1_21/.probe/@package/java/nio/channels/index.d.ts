import { $Closeable } from "@package/java/io";
import { $Consumer_ } from "@package/java/util/function";
import { $Path_, $OpenOption } from "@package/java/nio/file";
import { $ExecutorService, $Future } from "@package/java/util/concurrent";
import { $SocketOption, $SocketAddress, $ServerSocket, $NetworkInterface, $DatagramSocket, $InetAddress, $ProtocolFamily_, $Socket } from "@package/java/net";
import { $FileAttribute } from "@package/java/nio/file/attribute";
import { $AbstractSelectableChannel, $SelectorProvider, $AbstractInterruptibleChannel } from "@package/java/nio/channels/spi";
import { $Arena, $MemorySegment } from "@package/java/lang/foreign";
import { $Set_, $Set } from "@package/java/util";
import { $Throwable, $AutoCloseable, $Object } from "@package/java/lang";
import { $ByteBuffer, $MappedByteBuffer } from "@package/java/nio";
export * as spi from "@package/java/nio/channels/spi";

declare module "@package/java/nio/channels" {
    export class $WritableByteChannel {
    }
    export interface $WritableByteChannel extends $Channel {
        write(arg0: $ByteBuffer): number;
    }
    export class $AsynchronousChannel {
    }
    export interface $AsynchronousChannel extends $Channel {
        close(): void;
    }
    export class $Pipe$SourceChannel extends $AbstractSelectableChannel implements $ReadableByteChannel, $ScatteringByteChannel {
    }
    export class $NetworkChannel {
    }
    export interface $NetworkChannel extends $Channel {
        bind(arg0: $SocketAddress): $NetworkChannel;
        supportedOptions(): $Set<$SocketOption<never>>;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $NetworkChannel;
        getLocalAddress(): $SocketAddress;
        getOption<T>(arg0: $SocketOption<T>): T;
        get localAddress(): $SocketAddress;
    }
    export class $Pipe$SinkChannel extends $AbstractSelectableChannel implements $WritableByteChannel, $GatheringByteChannel {
    }
    export class $ReadableByteChannel {
    }
    export interface $ReadableByteChannel extends $Channel {
        read(arg0: $ByteBuffer): number;
    }
    export class $SelectionKey {
        readyOps(): number;
        interestOpsOr(arg0: number): number;
        interestOpsAnd(arg0: number): number;
        isConnectable(): boolean;
        isAcceptable(): boolean;
        cancel(): void;
        attachment(): $Object;
        attach(arg0: $Object): $Object;
        channel(): $SelectableChannel;
        isReadable(): boolean;
        isWritable(): boolean;
        isValid(): boolean;
        selector(): $Selector;
        interestOps(): number;
        interestOps(arg0: number): $SelectionKey;
        static OP_CONNECT: number;
        static OP_ACCEPT: number;
        static OP_READ: number;
        static OP_WRITE: number;
        get connectable(): boolean;
        get acceptable(): boolean;
        get readable(): boolean;
        get writable(): boolean;
        get valid(): boolean;
    }
    export class $SeekableByteChannel {
    }
    export interface $SeekableByteChannel extends $ByteChannel {
        size(): number;
        position(arg0: number): $SeekableByteChannel;
        position(): number;
        write(arg0: $ByteBuffer): number;
        read(arg0: $ByteBuffer): number;
        truncate(arg0: number): $SeekableByteChannel;
    }
    export class $SocketChannel extends $AbstractSelectableChannel implements $ByteChannel, $ScatteringByteChannel, $GatheringByteChannel, $NetworkChannel {
        write(arg0: $ByteBuffer[], arg1: number, arg2: number): number;
        write(arg0: $ByteBuffer[]): number;
        write(arg0: $ByteBuffer): number;
        read(arg0: $ByteBuffer[], arg1: number, arg2: number): number;
        read(arg0: $ByteBuffer): number;
        read(arg0: $ByteBuffer[]): number;
        connect(arg0: $SocketAddress): boolean;
        static open(arg0: $ProtocolFamily_): $SocketChannel;
        static open(): $SocketChannel;
        static open(arg0: $SocketAddress): $SocketChannel;
        socket(): $Socket;
        isConnected(): boolean;
        isConnectionPending(): boolean;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $SocketChannel;
        getLocalAddress(): $SocketAddress;
        getRemoteAddress(): $SocketAddress;
        finishConnect(): boolean;
        shutdownInput(): $SocketChannel;
        shutdownOutput(): $SocketChannel;
        bind(arg0: $SocketAddress): $NetworkChannel;
        get connected(): boolean;
        get connectionPending(): boolean;
        get localAddress(): $SocketAddress;
        get remoteAddress(): $SocketAddress;
    }
    export class $Selector implements $Closeable {
        wakeup(): $Selector;
        selectNow(): number;
        selectNow(arg0: $Consumer_<$SelectionKey>): number;
        selectedKeys(): $Set<$SelectionKey>;
        isOpen(): boolean;
        provider(): $SelectorProvider;
        close(): void;
        keys(): $Set<$SelectionKey>;
        static open(): $Selector;
        select(): number;
        select(arg0: number): number;
        select(arg0: $Consumer_<$SelectionKey>): number;
        select(arg0: $Consumer_<$SelectionKey>, arg1: number): number;
    }
    export class $ServerSocketChannel extends $AbstractSelectableChannel implements $NetworkChannel {
        accept(): $SocketChannel;
        static open(arg0: $ProtocolFamily_): $ServerSocketChannel;
        static open(): $ServerSocketChannel;
        bind(arg0: $SocketAddress, arg1: number): $ServerSocketChannel;
        socket(): $ServerSocket;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $ServerSocketChannel;
        getLocalAddress(): $SocketAddress;
        bind(arg0: $SocketAddress): $NetworkChannel;
        get localAddress(): $SocketAddress;
    }
    export class $Channel {
    }
    export interface $Channel extends $Closeable {
        isOpen(): boolean;
        close(): void;
        get open(): boolean;
    }
    export class $FileChannel$MapMode {
        static READ_ONLY: $FileChannel$MapMode;
        static READ_WRITE: $FileChannel$MapMode;
        static PRIVATE: $FileChannel$MapMode;
    }
    export class $ByteChannel {
    }
    export interface $ByteChannel extends $ReadableByteChannel, $WritableByteChannel {
    }
    export class $ScatteringByteChannel {
    }
    export interface $ScatteringByteChannel extends $ReadableByteChannel {
        read(arg0: $ByteBuffer[], arg1: number, arg2: number): number;
        read(arg0: $ByteBuffer[]): number;
    }
    export class $MembershipKey {
        unblock(arg0: $InetAddress): $MembershipKey;
        sourceAddress(): $InetAddress;
        networkInterface(): $NetworkInterface;
        group(): $InetAddress;
        block(arg0: $InetAddress): $MembershipKey;
        channel(): $MulticastChannel;
        isValid(): boolean;
        drop(): void;
        get valid(): boolean;
    }
    export class $CompletionHandler<V, A> {
    }
    export interface $CompletionHandler<V, A> {
        completed(arg0: V, arg1: A): void;
        failed(arg0: $Throwable, arg1: A): void;
    }
    export class $FileChannel extends $AbstractInterruptibleChannel implements $SeekableByteChannel, $GatheringByteChannel, $ScatteringByteChannel {
        lock(arg0: number, arg1: number, arg2: boolean): $FileLock;
        lock(): $FileLock;
        size(): number;
        position(): number;
        position(arg0: number): $FileChannel;
        map(arg0: $FileChannel$MapMode, arg1: number, arg2: number, arg3: $Arena): $MemorySegment;
        map(arg0: $FileChannel$MapMode, arg1: number, arg2: number): $MappedByteBuffer;
        write(arg0: $ByteBuffer, arg1: number): number;
        write(arg0: $ByteBuffer): number;
        write(arg0: $ByteBuffer[], arg1: number, arg2: number): number;
        write(arg0: $ByteBuffer[]): number;
        read(arg0: $ByteBuffer, arg1: number): number;
        read(arg0: $ByteBuffer): number;
        read(arg0: $ByteBuffer[], arg1: number, arg2: number): number;
        read(arg0: $ByteBuffer[]): number;
        static open(arg0: $Path_, ...arg1: $OpenOption[]): $FileChannel;
        static open(arg0: $Path_, arg1: $Set_<$OpenOption>, ...arg2: $FileAttribute<never>[]): $FileChannel;
        transferTo(arg0: number, arg1: number, arg2: $WritableByteChannel): number;
        tryLock(arg0: number, arg1: number, arg2: boolean): $FileLock;
        tryLock(): $FileLock;
        force(arg0: boolean): void;
        transferFrom(arg0: $ReadableByteChannel, arg1: number, arg2: number): number;
        truncate(arg0: number): $SeekableByteChannel;
    }
    export class $SelectableChannel extends $AbstractInterruptibleChannel implements $Channel {
        isRegistered(): boolean;
        register(arg0: $Selector, arg1: number): $SelectionKey;
        register(arg0: $Selector, arg1: number, arg2: $Object): $SelectionKey;
        provider(): $SelectorProvider;
        configureBlocking(arg0: boolean): $SelectableChannel;
        isBlocking(): boolean;
        validOps(): number;
        keyFor(arg0: $Selector): $SelectionKey;
        blockingLock(): $Object;
        get registered(): boolean;
        get blocking(): boolean;
    }
    export class $GatheringByteChannel {
    }
    export interface $GatheringByteChannel extends $WritableByteChannel {
        write(arg0: $ByteBuffer[], arg1: number, arg2: number): number;
        write(arg0: $ByteBuffer[]): number;
    }
    export class $MulticastChannel {
    }
    export interface $MulticastChannel extends $NetworkChannel {
        join(arg0: $InetAddress, arg1: $NetworkInterface): $MembershipKey;
        join(arg0: $InetAddress, arg1: $NetworkInterface, arg2: $InetAddress): $MembershipKey;
        close(): void;
    }
    export class $FileLock implements $AutoCloseable {
        acquiredBy(): $Channel;
        isShared(): boolean;
        overlaps(arg0: number, arg1: number): boolean;
        size(): number;
        position(): number;
        close(): void;
        release(): void;
        channel(): $FileChannel;
        isValid(): boolean;
        get shared(): boolean;
        get valid(): boolean;
    }
    export class $AsynchronousFileChannel implements $AsynchronousChannel {
        lock(arg0: number, arg1: number, arg2: boolean): $Future<$FileLock>;
        lock<A>(arg0: A, arg1: $CompletionHandler<$FileLock, A>): void;
        lock<A>(arg0: number, arg1: number, arg2: boolean, arg3: A, arg4: $CompletionHandler<$FileLock, A>): void;
        lock(): $Future<$FileLock>;
        size(): number;
        write(arg0: $ByteBuffer, arg1: number): $Future<number>;
        write<A>(arg0: $ByteBuffer, arg1: number, arg2: A, arg3: $CompletionHandler<number, A>): void;
        read(arg0: $ByteBuffer, arg1: number): $Future<number>;
        read<A>(arg0: $ByteBuffer, arg1: number, arg2: A, arg3: $CompletionHandler<number, A>): void;
        static open(arg0: $Path_, arg1: $Set_<$OpenOption>, arg2: $ExecutorService, ...arg3: $FileAttribute<never>[]): $AsynchronousFileChannel;
        static open(arg0: $Path_, ...arg1: $OpenOption[]): $AsynchronousFileChannel;
        tryLock(): $FileLock;
        tryLock(arg0: number, arg1: number, arg2: boolean): $FileLock;
        force(arg0: boolean): void;
        truncate(arg0: number): $AsynchronousFileChannel;
    }
    export class $InterruptibleChannel {
    }
    export interface $InterruptibleChannel extends $Channel {
        close(): void;
    }
    export class $Pipe {
        source(): $Pipe$SourceChannel;
        static open(): $Pipe;
        sink(): $Pipe$SinkChannel;
    }
    export class $DatagramChannel extends $AbstractSelectableChannel implements $ByteChannel, $ScatteringByteChannel, $GatheringByteChannel, $MulticastChannel {
        receive(arg0: $ByteBuffer): $SocketAddress;
        write(arg0: $ByteBuffer): number;
        write(arg0: $ByteBuffer[]): number;
        write(arg0: $ByteBuffer[], arg1: number, arg2: number): number;
        read(arg0: $ByteBuffer[]): number;
        read(arg0: $ByteBuffer): number;
        read(arg0: $ByteBuffer[], arg1: number, arg2: number): number;
        connect(arg0: $SocketAddress): $DatagramChannel;
        static open(): $DatagramChannel;
        static open(arg0: $ProtocolFamily_): $DatagramChannel;
        disconnect(): $DatagramChannel;
        send(arg0: $ByteBuffer, arg1: $SocketAddress): number;
        socket(): $DatagramSocket;
        isConnected(): boolean;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $DatagramChannel;
        getLocalAddress(): $SocketAddress;
        getRemoteAddress(): $SocketAddress;
        bind(arg0: $SocketAddress): $NetworkChannel;
        get connected(): boolean;
        get localAddress(): $SocketAddress;
        get remoteAddress(): $SocketAddress;
    }
}
